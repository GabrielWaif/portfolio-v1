type props = {
  tags: string[];
};

const ProjectTags = (props: props) => {
  return (
    <div id="tags">
      {props.tags.map((tag) => {
        return <p key={tag} className="tag">{tag}</p>;
      })}
    </div>
  );
};

export default ProjectTags;
