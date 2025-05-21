import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

const Homepage = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <section className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </section>
      <section className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </section>
      <section className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </section>
      <section className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </section>
      <section className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </section>
      <section className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </section>
    </main>
  );
};

export default Homepage;
