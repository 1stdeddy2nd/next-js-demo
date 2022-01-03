export const handleSort = (value: string, datas: Array<any>) => {
  switch (value) {
    case "nameAZ":
      return datas.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
    case "nameZA":
      return datas.sort((a, b) =>
        a.name < b.name ? 1 : b.name < a.name ? -1 : 0
      );
    case "usernameAZ":
      return datas.sort((a, b) =>
        a.username > b.username ? 1 : b.username > a.username ? -1 : 0
      );
    case "usernameZA":
      return datas.sort((a, b) =>
        a.username < b.username ? 1 : b.username < a.username ? -1 : 0
      );
    case "emailAZ":
      return datas.sort((a, b) =>
        a.email > b.email ? 1 : b.email > a.email ? -1 : 0
      );
    case "emailZA":
      return datas.sort((a, b) =>
        a.email < b.email ? 1 : b.email < a.email ? -1 : 0
      );
    case "phoneNumberAZ":
      return datas.sort((a, b) =>
        a.phone > b.phone ? 1 : b.phone > a.phone ? -1 : 0
      );
    case "phoneNumberZA":
      return datas.sort((a, b) =>
        a.phone < b.phone ? 1 : b.phone < a.phone ? -1 : 0
      );
    case "websiteAZ":
      return datas.sort((a, b) =>
        a.website > b.website ? 1 : b.website > a.website ? -1 : 0
      );
    case "websiteZA":
      return datas.sort((a, b) =>
        a.website < b.website ? 1 : b.website < a.website ? -1 : 0
      );
    default:
      return datas;
  }
};

export const handleFilterBySearch = (value: string, datas: Array<Object>) => {
  const result = datas.filter((data: Object) =>
    JSON.stringify(data).toLowerCase().includes(value.toLowerCase())
  );
  return result;
};