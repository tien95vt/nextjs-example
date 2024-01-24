import { Suspense } from "react";
import RandomUser from "@/app/fetch-random-server-side/RandomUser";

function FRSSP() {
    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <RandomUser />
        </Suspense>
    );
}

export default FRSSP;