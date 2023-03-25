import Layout from '@/components/layout';
import ProjectItem from '../components/projects/project-item';
import { ThemeProvider } from 'next-themes';
import { DATABASE_ID, TOKEN } from '../config';

export default function Projects({ projectList }) {
  return (
    <ThemeProvider>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
          <h1 className="text-4xl font-bold sm:text-6xl">
            총 프로젝트 :<span className="pl-4 text-blue-500">{projectList.results.length}</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
            {projectList.results.map(project => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [
        {
          property: '기간',
          direction: 'descending',
        },
      ],
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projectList = await res.json();
  return {
    props: { projectList },
  };
}
