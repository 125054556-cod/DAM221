import React, {useState, useEffect, useMemo, useCallback, useRef} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity,TextInput,StatusBar,FlatList,Pressable} from 'react-native';
import ButtonSheet from '../components/ButtonSheet';
import {gestureHandlerRootView} from 'react-native-gesture-handler';

export default function ModalScreeb(){
  const {modalVisible, setModalVisible} = useState(false);
  const {tasks, setTasks} = useState([]);
  const {task,setTask} = useState('');
  const {priority, setPriority} = useState('Media');

  const bottonSheetRef = useRef(null);
  const nextTaskId = useRef(0);
  const snapPoints = useMemo(() => ['35%', '53%'], []);

  const openBottomSheet = useCallback(() => {
    bottonSheetRef.current?.snapToIndex(1);
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottonSheetRef.current?.snapToIndex(0);
  }, []);

  const saveTask = useCallback(() => {
    if (task.trim() === '') {
      return;
    }
    setTasks(currentTasks => [
      ...currentTasks,
      {id: nextTaskId.current++,
      name: taskName,
      priority: priority},
    ]);
    setTask('');
    setModalVisible(false);
  };
  const selectPriority = (currentTasks) => {
    setPriority(selectedPriority);
    bottonSheetRef.current?.close();
  }

  return(
    <gestureHandlerRootView style = {styles.root}>
      <StatusBar barStyle = "dark-content" />
      <View style = {styles.container}>
        <Text style = {styles.title}>organiza tus tareas</Text>
        <Text style = {styles.subtitle} >crea una nueva taera</Text>
        <Pressable styles = {styles.button} onPress = {() => setModalVisible(true)}>
          <Text style = {styles.buttonText}> NUEVA TAREA</Text>

        </Pressable>
        <Pressable styles = {styles.button} onPress = {openBottomSheet}>

          <Text style = {styles.buttonText}> seleccionar prioridad</Text>
        </Pressable>
        <FlatList>
          contentContainerStyle = {styles.taskList}
          data = {tasks}
          keyExtractor = {item => item.id.toString()}
          renderItem = {({item}) => (
            <View style = {styles.taskCard}>
              <Text style = {styles.cardTitle}>Tarea: {index +1}</Text>
              <Text style = {styles.taskText}>{item.name}</Text>
              <Text style = {styles.priorityText}>Prioridad: {item.priority}</Text>


            </View>
          )}
        </FlatList>
      </View>
      <Modal visible = {modalVisible} animationType = "slide" transparent = {true}>
        <View style = {styles.modalContainer}>
          <View style = {styles.modalContent}>
            <Text style = {styles.modalTitle}>Nueva Tarea</Text>
            <TextInput
              style = {styles.input}
              placeholder = "Nombre de la tarea"
              value = {task}
              onChangeText = {setTask}
            />
            <Pressable style = {styles.saveButton} onPress = {saveTask}>
              <Text style = {styles.buttonText}>Guardar Tarea</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ButtonSheet>
        ref = {bottonSheetRef}
        snapPoints = {snapPoints}
        index = {0}
        enablePanDownToClose = {true}
        backgroundStyle = {styles.bottomSheetBackground}
        handleIndicatorStyle = {styles.bottomSheetHandleIndicator}
        <ButtonSheetView>
          
        </ButtonSheetView>
      </ButtonSheet>
    </gestureHandlerRootView>
  );
}