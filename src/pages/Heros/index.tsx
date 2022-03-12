import { FC, useState, useEffect } from "react";
import { Table, Row, Col, Button, Input, Space } from "antd";
import { Filter } from "../../components/filter/Filter.tsx";
import styles from "./Heros.module.scss";
import { HerosFilterFields } from "./HerosFilterFields.tsx";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

export const Heros: FC = () => {
  const { filterFields } = HerosFilterFields();
  const [searchInfo, setSearchInfo] = useState({
    searchText: "",
    searchedColumn: ""
  });
  //state to save heros data
  // const [herosData, setHerosData] = useState();

  //get all heros data
  useEffect(() => {
    //get heros data endpoint
    //  getAllHeros().then((data) => {
    //    setHerosData(data);
    //  })
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchInfo({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchInfo({ searchText: "", searchedColumn: "" });
  };

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div className={styles["search-input"]}>
        <Input
          placeholder={`Search by ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small">
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: () => <SearchOutlined />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: text =>
      searchInfo.searchedColumn === dataIndex ? (
        <Highlighter
          highlightClassName={styles.highlight}
          searchWords={[searchInfo.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      )
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
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
      render: text => (
        <Button type="link" className={styles.btn}>
          {text}
        </Button>
      )
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
      date: "2022-01-04",
      country: "Sweden",
      company: "eBay"
    },
    {
      key: "2",
      name: "Jim Green",
      phone: "0547583749",
      email: "b@mail.com",
      date: "2022-02-05",
      country: "Austria",
      company: "LV"
    },
    {
      key: "3",
      name: "Joe Black",
      phone: "0574893745",
      email: "c@mail.com",
      date: "2022-03-05",
      country: "Germany",
      company: "Facebook"
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
