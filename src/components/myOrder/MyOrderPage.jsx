import React from "react";

import "./MyOrderPage.css";
import Table from "../Common/Table";
import useData from "../../hooks/useData";
import Loder from "../Common/Loder";

const MyOrderPage = () => {
  const { data: orders, error, isLoading } = useData("/order");

  const getProductString = (order) => {
    const productStringArr = order.products.map(
      (p) => `${p.product.title}(${p.quantity})`
    );

    return productStringArr.join(", ");
  };
  return (
    <section className="align_center myorder_page">
      {isLoading && <Loder />}
      {error && <em className="form_error">{error}</em>}
      {orders && (
        <Table headings={["Order", "Products", "Total", "Status"]}>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{getProductString(order)}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default MyOrderPage;
