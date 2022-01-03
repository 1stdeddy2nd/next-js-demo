import { useState } from "react";
import axios from "axios";
import CustomSearch from "../components/custom-search";
import { useRouter } from "next/router";
import { handleFilterBySearch, handleSort } from "../components/utils";

export default function Home(props: any) {
  const { dataUsers, searchQuery, sortQuery } = props;
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const handleSearch = () => {
    const newValue = searchValue?.replace(/\s\s+/g, " ");
    if (
      (!newValue || newValue === "" || newValue === " ") &&
      sortQuery === ""
    ) {
      router.push("/");
    } else if (!newValue || newValue === "" || newValue === " ") {
      router.push(`/?sort=${sortQuery}`);
    } else {
      router.push(`/?search=${newValue}&sort=${sortQuery}`);
    }
  };

  const handleSelectChange = (e: any) => {
    setSortValue(e.target.value);
    if (!searchQuery || searchQuery === "" || searchQuery === " ")
      router.push(`/?sort=${e.target.value}`);
    else router.push(`/?search=${searchQuery}&sort=${e.target.value}`);
  };

  const renderSelect = () => {
    return (
      <select
        className="h-100 w-100 border-2 rounded-2"
        value={sortValue}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Sort By
        </option>
        <option value="nameAZ">Name A-Z</option>
        <option value="nameZA">Name Z-A</option>
        <option value="usernameAZ">Username A-Z</option>
        <option value="usernameZA">Username Z-A</option>
        <option value="emailAZ">Email A-Z</option>
        <option value="emailZA">Email Z-A</option>
        <option value="phoneNumberAZ">Phone Number A-Z</option>
        <option value="phoneNumberZA">Phone Number Z-A</option>
        <option value="websiteAZ">Website A-Z</option>
        <option value="websiteZA">Website Z-A</option>
      </select>
    );
  };

  const renderTable = () => {
    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr className="text-center fs-6">
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers?.length > 0 ? (
              dataUsers?.map((user: any, i: number) => {
                return (
                  <tr className="font-small align-middle" key={user.id}>
                    <td className="text-center fw-bold">{i + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  DATA TIDAK DITEMUKAN
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="container-md p-2">
        <h3 className="text-center">USER TABLE</h3>
        <hr />
        <div className="flex-column d-flex">
          <div className="mb-3 row">
            <div className="col-md-9">
              <CustomSearch
                value={searchValue}
                onChangeCB={setSearchValue}
                handleSearchCB={handleSearch}
              />
            </div>
            <div className="col-md-3" style={{ minHeight: "40px" }}>
              {renderSelect()}
            </div>
          </div>
          {renderTable()}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const searchQuery = context.query.search ?? "";
  const sortQuery = context.query.sort ?? "";
  const dataUsers = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resp: any) =>
      handleSort(sortQuery, handleFilterBySearch(searchQuery, resp.data))
    )
    .catch((e: any) => {
      console.error(e);
      return null;
    });
  return {
    props: {
      dataUsers,
      searchQuery,
      sortQuery,
    },
  };
}
