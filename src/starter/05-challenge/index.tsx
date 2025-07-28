interface BasicProfileCardProps {
  type: "basic";
  name: string;
  // email: string;
}
interface AdvancedProfileCardProps {
  type: "advanced";
  name: string;
  email: string;
}

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

function Component(props: ProfileCardProps) {
  // const { type, name, email } = props;
  // const alertType = type === "basic" ? "success" : "danger";
  // const className = `alert alert-${alertType}`;

  const { type, name } = props;
  if (type === "basic") {
    return (
      <article className="alert alert-success">
        <h2>User = {name}</h2>
      </article>
    );
  }

  const { email } = props;
  if (type === "advanced") {
    return (
      <article className="alert alert-danger">
        <h2>User = {name}</h2>
        <h2>Email = {email}</h2>
      </article>
    );
  }
}
export default Component;
