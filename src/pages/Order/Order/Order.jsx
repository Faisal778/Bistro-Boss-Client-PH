import React, { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import Footer from "../../shared/Footer";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salad", "soup", "dessert", "drinks", "pizza"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
       <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover image={orderCoverImg} title={"Order Food"}></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center my-8 bg-gray-200 p-4 rounded-lg">
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessart</Tab>
          <Tab>Drinks</Tab>
          <Tab>Pizza</Tab>
        </TabList>
        <TabPanel className="my-8">
          <OrderTab items={salad}></OrderTab>
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    salad.map(item=> <FoodCard key={item._id} item= {item}></FoodCard>)
                }
           </div> */}
        </TabPanel>
        <TabPanel className="my-8">
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel className="my-8">
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel className="my-8">
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        <TabPanel className="my-8">
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
