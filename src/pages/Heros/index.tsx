import { FC } from "react";
import { Table, Space, Row, Col } from "antd";
import { Filter } from "../../components/filter/Filter.tsx";
import styles from "./Heros.module.scss";
import { HerosFilterFields } from "./HerosFilterFields.tsx";

export const Heros: FC = () => {
  const { filterFields } = HerosFilterFields();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: text => <a>{text}</a>
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country"
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company"
    }
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      phone: "0564738945",
      email: "a@mail.com",
      date: "909",
      country: "Saudi Arabia",
      company: "LV"
    },
    {
      key: "2",
      name: "Jim Green",
      phone: "0547583749",
      email: "b@mail.com",
      date: "909",
      country: "Saudi Arabia",
      company: "LV"
    },
    {
      key: "3",
      name: "Joe Black",
      phone: "0574893745",
      email: "c@mail.com",
      date: "909",
      country: "Saudi Arabia",
      company: "LV"
    }
  ];

  return (
    <div className={styles.container}>
      <Row gutter={[16, 16]}>
        <Col span={5}>
          <Filter filterFields={filterFields} />
        </Col>
        <Col span={19}>
          <Table
            className={styles.table}
            columns={columns}
            dataSource={data}
            pagination={false}
            title={() => "Heros"}
          />
        </Col>
      </Row>
    </div>
  );
};
