import { Explaination } from "../components/Explaination";
import { ServerExample } from "../components/ServerExample";
import { SillyFib } from "../components/SillyFibb";

export default async function Page() {
  return (
    <ServerExample>
      <Explaination inClientExample={false} />
      <div>
        <SillyFib number={10} inClientExample={false} />
      </div>
    </ServerExample>
  );
}
