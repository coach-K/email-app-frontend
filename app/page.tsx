import Link from "next/link";
import { fetchOverview } from "./lib/data";

export default async function Home() {
  const response = await fetchOverview();
  const overview = response?.data;
  const unreadMessage = overview?.unreadMessage || 0;
  const allMessage = overview?.allMessage || 0;
  const user = overview?.user;

  return (
    <div className="text-center mt-5">
      <div>
        <h1>Hello! {user && `${user.firstname} ${user.lastname}`}</h1>
      </div>

      <div className="mt-5">
        <h2>You have {unreadMessage} unread messages out of {allMessage} total</h2>
      </div>

      <div className="mt-5">
        <Link className="btn btn-lg btn-primary" href="/inbox">View Messages</Link>
      </div>
    </div>
  );
}
