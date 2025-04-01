import { Header } from "./components/header.jsx";
import { Post } from "./components/Post.jsx";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar.jsx";
import "./global.css";

const posts = [
  {
    id:1,
    author : {
      avatarUrl: 'https://github.com/RomeuRiffatti.png',
      name: 'Romeu Riffatti',
      role: 'Web Developer',
    },
    content: [
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: <a href="#">jane.design/doctorcare</a>,},
    ],
    publishedAt: new Date('2022-05-05 20:00')          
  },
  {
    id:2,
    author : {
      avatarUrl: 'https://github.com/danwolker.png',
      name: 'Daniel Wolker',
      role: 'Web Design',
    },
    content: [
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: <a href="#">jane.design/doctorcare</a>,},
    ],
    publishedAt: new Date('2022-05-05 20:00')
  }
]

export function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map((post) => {
              return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}  
              />
            )})}
          </main>
        </div>
      </div>
    </>
  );
}
