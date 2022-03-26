import './table.css';


export const TableData = ({ deleteData, data }) => {
  return (
    <>
      <div className="table-data">
        <tr key={data.id}>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.address}</td>
          <td>{data.department}</td>
          <td>{data.salary}</td>
          <td>{data.maritalstate}</td>
          <td>
            <button onClick={() => deleteData(data.id)}>delete</button>
          </td>
        </tr>
      </div>
    </>
  );
};
