import { useTitle } from "../../hooks/useTitile"

import { EmptyDashboard } from "./components/EmptyDashboard"
import { DashbaordCard } from "./components/DashbaordCard"
import { useEffect, useState } from "react"
import { getUserOrder } from "../../services";
import { toast } from "react-toastify";


export const DashboardPage = () => {
  useTitle("Dashboard")
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    async function fetchOrders() {

      try {
        const data = await getUserOrder();
        setOrders(data)

      } catch (error) {
        toast.error(error.message, { closeButton: true, position: "bottom-center", closeOnClick: true })

      }

    }

    fetchOrders();
  }, [])

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      {orders.length && orders.map((order) => (
        <DashbaordCard key={order.id} order={order} />
      ))}

      <section>

      </section>
      <section>
        {!orders.length && <EmptyDashboard />}
      </section>
    </main>
  )
}