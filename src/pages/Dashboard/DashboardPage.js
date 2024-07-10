import { useTitle } from "../../hooks/useTitle";
import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";

export const DashboardPage = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [orders, setOrders] = useState([]);
    useTitle("Dashboard");

    useEffect(() => {
        async function fetchOrders() {
            try {
                const data = await getUserOrders();
                setOrders(data);
                setErrorMessage("ok");
            } catch (error) {
                setErrorMessage(error.message);
            }
        }
        fetchOrders();
    }, []);

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            </section>


            {
                (errorMessage) && (errorMessage !== "ok") ? (
                    <section>
                        <div className="text-center mt-10 dark:text-white text-3xl"><span>Sorry, Server Error - {errorMessage}! Please Re-Login.</span></div>
                    </section>
                )
                :
                (
                    <>
                        <section>
                            {
                                orders.length > 0 && orders.map((order) => (
                                    <DashboardCard key={order.id} order={order} />
                                ))
                            }
                        </section>

                        <section>
                            {!orders.length === 0 && <DashboardEmpty />}
                        </section>
                    </>
                )
            }

        </main>
    )
}
