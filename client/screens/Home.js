import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { getWorkoutsFromDB, getUserFromDB } from '../utils/api';
import Header from '../components/Header';
import WorkoutList from '../components/WorkoutList';
import Options from '../components/Options';
import WorkoutModal from '../components/WorkoutModal';

function Home({ navigation }) {
  const [workouts, setWorkouts] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const user = await getUserFromDB();
      const workouts = await getWorkoutsFromDB();
      setWorkouts(workouts);
    };
    getData();
  }, []);

  const toggleModal = () => setModalVisible(!isModalVisible);

  return (
    <View style={styles.container}>
      <Header title="Logger" />
      <WorkoutList workouts={workouts} />
      <Options onPress={toggleModal} />
      <WorkoutModal isVisible={isModalVisible} toggleModal={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
