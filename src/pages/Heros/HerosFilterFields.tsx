export const HerosFilterFields = () => {
  const filterFields = [
    {
      title: "Email",
      type: "text",
      name: "email"
    },
    {
      title: "Phone",
      type: "text",
      name: "user_phone"
    },
    {
      title: "Name",
      type: "text",
      name: "user_name"
    },
    {
      title: "Company",
      type: "text",
      name: "company"
    },
    {
      title: "Country",
      type: "dropdown",
      api: "https://restcountries.com/v2/region/europe",
      multiple: false,
      name: "country"
    },
    {
      title: "Date",
      type: "date",
      name: "date"
    }
  ];

  return {
    filterFields
  };
};
