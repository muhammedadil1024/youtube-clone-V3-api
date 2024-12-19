import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    // this will get status and data of the error occurred
    const { status, data } = useRouteError();

    return (
            <section className="flex items-center h-full p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        {/* error code */}
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                            <span className="sr-only">Error</span>
                            {status}
                        </h2>
                        {/* error message */}
                        <p className="text-2xl font-semibold md:text-3xl">
                            {status === 404 ? "Sorry, we couldn't find this page." : data}
                        </p>
                        <p className="mt-4 mb-8 text-gray-500">
                            But dont worry, you can find plenty of other things on our homepage.
                        </p>
                        {/* back to homepage link */}
                        <Link
                            to={"/"}
                            className="px-8 py-3 font-semibold rounded bg-[#0f0f0f] hover:bg-[#0f0f0f]/90 text-white"
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
    );
};

export default Error;
