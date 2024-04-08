

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function LogIn() {
    return (
        <div className="w-full mx-auto mt-6 ">
            <Card color="transparent" className="mx-auto lg:w-[440px] p-8 bg-gray-100" shadow={true}>
                <Typography variant="h4" color="blue-gray">
                   Log In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your email and password to Log In.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                      
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                
                    <Button className="mt-6" fullWidth>
                        Log In
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Do not have an account?{" "}
                        <Link to={'/register'}>Register</Link>
                    </Typography>
                </form>
            </Card>
        </div>

    );
}

export default LogIn;