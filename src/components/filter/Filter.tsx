import { Card, Divider, Form, Input, DatePicker, Button, Select } from "antd";
import styles from "./Filter.module.scss";
import { FC, useState, useEffect } from "react";
import { IFilterFields } from "../../interfaces/IEntity";
import { HerosApis } from "../../services/heros.tsx";
import { useNavigate } from "react-router-dom";
import moment from "moment";

interface IProps {
  filterFields: IFilterFields[];
}

export const Filter: FC<IProps> = ({ filterFields }) => {
  const { getOptionsList } = HerosApis();
  const { Option } = Select;
  const [options, setOptions] = useState([]);
  const [form] = Form.useForm();
  const navigateTo = useNavigate();
  const params = new URLSearchParams(window.location.search);

  const fields = {
    DATE: "date"
  };
  const getOptions = (api: string) => {
    getOptionsList(api).then(data => {
      setOptions(data);
    });
    return <></>;
  };

  const applyFilter = (values: any) => {
    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        if (key === fields.DATE) {
          params.set(key, moment(value).format("yyyy-MM-DD"));
        } else {
          params.set(key, value);
        }
      }
    });
    navigateTo({ search: params.toString() });
  };

  useEffect(() => {
    form.setFieldsValue({
      user_name: params.get("user_name"),
      email: params.get("email"),
      user_phone: params.get("user_phone"),
      company: params.get("company"),
      country: params.get("country"),
      date: params.get("date") ? moment(params.get("date"), "YYYY-MM-DD") : ""
    });
  }, []);

  return (
    <>
      <Card className={styles.container}>
        <div>
          <span className={styles.title}>Filters</span>
        </div>
        <Divider />
        <Form layout="vertical" form={form} onFinish={applyFilter}>
          {filterFields.map((field, index) => {
            return field.type === "text" ? (
              <Form.Item key={index} label={field.title} name={field.name}>
                <Input />
              </Form.Item>
            ) : field.type === "dropdown" ? (
              <Form.Item key={index} label={field.title} name={field.name}>
                <Select multiple={field.multiple}>
                  {getOptions(field.api)}
                  {options?.map(option => {
                    return (
                      <Option value={option.name} key={option.name}>
                        {option.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            ) : (
              <Form.Item key={index} label={field.title} name={field.name}>
                <DatePicker format="yyyy-MM-DD" className={styles.date} />
              </Form.Item>
            );
          })}
          <Form.Item>
            <div className={styles.btn}>
              <Button type="primary" htmlType="submit">
                Filter
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
