import React from 'react';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import Auth from '../../hooks/useAuth';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Group,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Container,
    Grid,
} from '@mantine/core';


const Login = (props) => {

    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const { signInUsingGooglePopup, signInUsingGithubPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, setError, setUser, auth, setIsLoading } = Auth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInUsingGooglePopup()
            .then(result => {
                setUser(result.user)
                navigate(-1)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInUsingGithubPopup()
            .then(result => {
                setUser(result.user)
                navigate(-1)
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const handleEmailRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        await createUserWithEmailAndPassword(auth, form.values.email, form.values.password)
            .then((userCredential) => {
                setUser(userCredential.user)
                setIsLoading(false);
                navigate(-1)
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsLoading(false)
                console.log(errorCode, errorMessage)
            });
    }
    

    const handleEmailSignIn = async (e) => {
        e.preventDefault();
        console.log(form.values)
        setIsLoading(true)
        await signInWithEmailAndPassword(auth, form.values.email, form.values.password)
            .then((userCredential) => {
                setUser(userCredential.user)
                setIsLoading(false);
                navigate(-1)
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsLoading(false)
                console.log(errorCode, errorMessage)
            });
    }



    return (
        <Container size='lg'>
            <Grid align='center' style={{ margin: '5rem 0' }} gutter={40}>
                <Grid.Col span={6}>
                    <img src={'/assets/images/Fingerprint-rafiki.svg'} alt="" />
                </Grid.Col>
                <Grid.Col span={6} style={{ padding: '0 4rem ' }}>
                    <Text size="lg" weight={500}>
                        Welcome to Hourent, {type} with
                    </Text>

                    <Group grow mb="md" mt="md">
                        <Button onClick={handleGoogleSignIn} size='md' color='cyan' variant='outline' radius="xl">Google</Button>
                        <Button onClick={handleGithubSignIn} size='md' color='cyan' variant='outline' radius="xl">Github</Button>
                    </Group>

                    <Divider label="Or continue with email" labelPosition="center" my="lg" />

                    <form onSubmit={form.onSubmit(() => { })}>
                        <Stack>
                            {type === 'register' && (
                                <TextInput
                                    label="Name"
                                    placeholder="Your name"
                                    value={form.values.name}
                                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                />
                            )}

                            <TextInput
                                required
                                label="Email"
                                placeholder="hello@mantine.dev"
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                error={form.errors.email && 'Invalid email'}
                            />

                            <PasswordInput
                                required
                                label="Password"
                                placeholder="Your password"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                error={form.errors.password && 'Password should include at least 6 characters'}
                            />

                            {type === 'register' && (
                                <Checkbox
                                    color='cyan'
                                    label="I accept terms and conditions"
                                    checked={form.values.terms}
                                    onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                                />
                            )}
                        </Stack>

                        <Group position="apart" mt="xl">
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={() => toggle()}
                                size="xs"
                            >
                                {type === 'register'
                                    ? 'Already have an account? Login'
                                    : "Don't have an account? Register"}
                            </Anchor>
                            {
                                type === 'register' ?
                                    <Button color='cyan' type="submit" onClick={handleEmailRegister}>Register</Button>
                                    :
                                    <Button color='cyan' type="submit" onClick={handleEmailSignIn}>Login</Button>}
                        </Group>
                    </form>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Login;