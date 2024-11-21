import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "./styles"

import { Participant } from '../../components/participant';

export function Home() {
  const participants = ['Alan', 'Rodrigo', 'Mayk', 'Diego', 'Ana', 'Isa', 'Jack', 'João', 'Vini', 'Biro']

  function handleParticipantAdd() {
    console.log('Clicou');
  }

  function handleParticipantRemove(name: string) {
    console.log('Removeu: ' + name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou ainda no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  );
}
