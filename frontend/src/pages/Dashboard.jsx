import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/slices/user/Service';
import CustomDataTable from '../components/CustomDataTable';
import CustomModal from '../components/CustomModal';
import { fetchNutrition } from '../redux/slices/nutrition/Service';
import { fetchUserNutrition } from '../redux/slices/userNutritions/Service';
import { addUserNutrition } from '../redux/slices/addUserNutritions/Service';
import CustomCircularProgress from '../components/CustomCircularProgress';

const Dashboard = () => {
  const [dataList, setDataList] = useState([])
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(state => state.user);
  const nutrition = useSelector(state => state.nutrition);
  const userNutrition = useSelector(state => state.userNutrition);
  const newUserNutrition = useSelector(state => state.addUserNutrition);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchNutrition())
    dispatch(fetchUserNutrition())
  }, [dispatch]);

  useEffect(() => {
    setDataList(userNutrition.data)
  }, [userNutrition.data])

  useEffect(() => {
    setDataList(prevList => [...newUserNutrition.data, ...prevList])
  }, [newUserNutrition.data])


  const nutritionsColumn = [
    // { name: "id", sortable: true, cell: (row) => row.id },
    { name: "desert", sortable: true, cell: (row) => row.desert },
    { name: "calories", sortable: true, cell: (row) => row.calories },
    { name: "fat", sortable: true, cell: (row) => row.fat },
    { name: "carbs", sortable: true, cell: (row) => row.carbs },
    { name: "protein", sortable: true, cell: (row) => row.protein },
  ]

  const userNutritionsColumn = [
    // { name: "id", sortable: true, cell: (row) => row.id },
    { name: "desert", sortable: true, cell: (row) => row.desert },
    { name: "calories", sortable: true, cell: (row) => row.calories },
    { name: "fat", sortable: true, cell: (row) => row.fat },
    { name: "carbs", sortable: true, cell: (row) => row.carbs },
    { name: "protein", sortable: true, cell: (row) => row.protein },
  ]

  if (loading) {
    return <CustomCircularProgress />;
  }

  if (error) {
    return (
      <>
        <h1>{error}</h1>
      </>
    );
  }

  return data ? (
    <>
      {data.email}
      <CustomModal component={
        <CustomDataTable
          title={"Nutrition List"}
          data={nutrition.data.length !== 0 ? nutrition.data : []}
          columns={nutritionsColumn}
          appendDispatch={addUserNutrition}
          appendData={true} />} 
      />

      {userNutrition.data.length !== 0 ? <CustomDataTable
        title={"User Recommended Nutrition"}
        data={dataList}
        columns={userNutritionsColumn}
      /> : <CustomCircularProgress />}
    </>
  ) : (
    <>Not Authenticated</>
  );
};

export default Dashboard;
