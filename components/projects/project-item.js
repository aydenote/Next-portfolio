import Image from 'next/legacy/image';

export default function ProjectItem({ project }) {
  const title = project.properties.프로젝트명.title[0].text.content;
  const githubLink = project.properties.Github.url;
  const startDate = project.properties.기간.date.start;
  const endDate = project.properties.기간.date.end;
  const description = project.properties.설명.rich_text[0].text.content;
  const skillList = project.properties.스킬.multi_select;
  const imageSrc = project.cover.file?.url || project.cover.external.url;

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imageSrc}
        alt="cover image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        objectPosition="top"
        quality={100}
      />

      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <div className="flex items-start mt-2">
          {skillList.map(skill => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={skill.id}>
              {skill.name}
            </h1>
          ))}
        </div>
        <a href={githubLink} target="_blank">
          깃허브 바로가기
        </a>
        <div>
          {startDate} ~ {endDate}
        </div>
      </div>
    </div>
  );
}
