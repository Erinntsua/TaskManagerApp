import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { categories } from './data/categories';
import { tasks } from './data/tasks';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <StatusBar style="dark" />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.greeting}>Hello , Devs</Text>
              <Text style={styles.subtitle}>14 tasks today</Text>
            </View>
            <Image source={require('./assets/avatar.png')} style={styles.avatar} />
          </View>

          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={20} color="#1A1A1A" />
              <TextInput
                placeholder="Search"
                placeholderTextColor="#1A1A1A"
                style={styles.searchInput}
              />
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="options-outline" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionHeading}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {categories.map((cat) => (
              <View key={cat.id} style={styles.categoryCard}>
                <Text style={styles.categoryName}>{cat.name}</Text>
                <Text style={styles.categoryCount}>{cat.taskCount} Tasks</Text>
                <Image source={cat.image} style={styles.categoryImage} resizeMode="contain" />
              </View>
            ))}
          </ScrollView>

          <Text style={styles.sectionHeading}>Ongoing Task</Text>
          {tasks.map((task) => (
            <View key={task.id} style={styles.taskCard}>
              <Text style={styles.taskTitle}>{task.title}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5E7DC' },
  container: { padding: 24, paddingBottom: 40 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  greeting: { fontSize: 30, fontWeight: 'bold', color: '#1A1A1A' },
  subtitle: { fontSize: 15, color: '#5C5C5C', marginTop: 4 },
  avatar: { width: 56, height: 56, borderRadius: 28 },
  searchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  searchBox: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FBF3EC', borderRadius: 30, paddingHorizontal: 16, height: 56, marginRight: 12 },
  searchInput: { marginLeft: 10, fontSize: 16, fontWeight: '600', flex: 1 },
  filterBtn: { backgroundColor: '#E85C33', width: 56, height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  sectionHeading: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 12 },
  categoryScroll: { marginBottom: 24 },
  categoryCard: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 16, width: 175, height: 240, marginRight: 12, justifyContent: 'space-between' },
  categoryName: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A' },
  categoryCount: { fontSize: 13, color: '#5C5C5C', marginTop: 2 },
  categoryImage: { width: '100%', height: 130 },
  taskCard: { width: '100%', height: 128, backgroundColor: '#FBF3EC', borderWidth: 1, borderColor: '#E8D1BA', borderRadius: 15, padding: 24, marginBottom: 16, justifyContent: 'flex-end' },
  taskTitle: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A' },
});