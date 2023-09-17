import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'; // Importe os ícones desejados

const data = [
  {
    id: '1',
    username: 'Filipe Deschamps',
    userImage: require('./assets/user1.png'),
    postImage: require('./assets/Bun.jpeg'),
    text: 'Vercel adiciona suporte ao gerenciador de módulos do Bun: projetos que contenham um arquivo “bun.lockb” rodarão por padrão o comando “bun install”. Assim como o yarn e pnpm, o Bun foca em acelerar o processo de instalação e economizar espaço em disco. A mudança afeta apenas a fase de build, não a de runtime. As informações são do changelog da Vercel.',
  },
  {
    id: '2',
    username: 'DevMedia',
    userImage: require('./assets/devmedia.png'),
    postImage: require('./assets/post2.png'),
    text: 'Texto da segunda postagem. Outro texto longo que será truncado com reticências quando for muito longo.',
  },
  // Adicione mais objetos de postagem aqui conforme necessário.
  {
    id: '3',
    username: 'Usuário 3',
    userImage: require('./assets/post.png'),
    postImage: require('./assets/post.png'),
    text: 'Texto da terceira postagem. Mais um exemplo de texto longo que será truncado.',
  },
  {
    id: '4',
    username: 'Usuário 4',
    userImage: require('./assets/post.png'),
    postImage: require('./assets/post.png'),
    text: 'Texto da quarta postagem. Exemplo de texto longo que será truncado com reticências.',
  },
  {
    id: '5',
    username: 'Filipe Deschamps',
    userImage: require('./assets/user1.png'),
    postImage: require('./assets/post5.png'),
    text: 'Popular engine de jogos Unity anuncia nova estrutura de preço, gerando confusão e alvoroço entre desenvolvedores: a partir de 2024, será cobrada uma taxa extra de até 20 centavos de dólar por cada instalação de jogos que usam a engine. Isso gerou uma enorme preocupação sobre como serão tratados jogos pirateados, demos ou quando o jogo for instalado em vários dispositivos pelo jogador ao longo do tempo. A mudança seria particularmente prejudicial para desenvolvedores de jogos independentes. As informações são do site The Verge.',
  },
];

export default function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <Image source={item.userImage} style={styles.userImage} />
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.postText} numberOfLines={expanded ? undefined : 2}>
        {item.text}
      </Text>
      {item.text.length > 100 && (
        <TouchableOpacity onPress={toggleExpand}>
          <Text style={styles.expandText}>
            {expanded ? 'Veja menos' : 'Veja mais'}
          </Text>
        </TouchableOpacity>
      )}
      <Image source={item.postImage} style={styles.postImage} />
      <View style={styles.iconContainer}>
        <View style={styles.iconTextContainer}>
          <FontAwesome name="thumbs-up" size={24} color="#333" />
          <Text style={styles.iconText}>Gostei</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <FontAwesome name="comment" size={24} color="#333" />
          <Text style={styles.iconText}>Comentar</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <FontAwesome name="share" size={24} color="#333" />
          <Text style={styles.iconText}>Compartilhar</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Feather name="send" size={24} color="#333" />
          <Text style={styles.iconText}>Enviar</Text>
        </View>
      </View>
    </View>
  );

  const windowHeight = Dimensions.get('window').height;
  const postsHeight = windowHeight * 0.7;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/post.png')}
          style={styles.userImageHeader}
        />
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#333" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
            placeholderTextColor="#333"
          />
        </View>
        <Feather name="message-circle" size={20} color="#333" />
      </View>
      <ScrollView style={{ height: postsHeight }}>
        {data.map((item) => renderItem({ item }))}
      </ScrollView>
      {/* Menu horizontal fixo na parte inferior da tela */}
      <View style={styles.bottomMenu}>
        <Feather name="home" size={24} color="#333" />
        <Feather name="users" size={24} color="#333" />
        <Feather name="edit" size={24} color="#333" />
        <Feather name="bell" size={24} color="#333" />
        <Feather name="briefcase" size={24} color="#333" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  userImageHeader: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  post: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postText: {
    fontSize: 14,
    marginTop: 8,
  },
  postImage: {
    width: '100%',
    height: 400,
    marginTop: 8,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  iconTextContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    marginTop: 4,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  // Estilos para o menu horizontal fixo
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  expandText: {
    color: 'blue',
    marginTop: 5,
  },
});