import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { findWorkshops } from "~/server/workshops";

interface LoaderData {
  workshopsCount: number;
}

export async function loader() {
  const workshops = await findWorkshops();

  return json<LoaderData>({ workshopsCount: workshops.length });
}

export default function Workshops() {
  const { workshopsCount } = useLoaderData<LoaderData>();
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Workshops Management ({workshopsCount})
          </h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
    </div>
  );
}
