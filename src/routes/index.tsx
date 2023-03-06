import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const github = useStore( {
    org: 'ys1113457623',
    repos: ['ys1113457623', 'flutter_portfolio','API','Programming-Paradigms'] as string[] | null,

  });
  
  /*
  store the state of the component
present the state as a proxy that can observe read/writes to the store
serialize the state of the store into JSON on application pause.
observe which properties of the store are used in a component template and create subscriptions to the store. The subscriptions are then used to automatically update the component template if a store changes.
  */
  
  return (
   <div>
     <span>
       GitHub username: <input type="text" value={github.org}/>
     </span>
     <div>
       {github.repos ? (
        <ul>
          {
            github.repos.map(repo => (
              <li>
                <a href={`https://github.com/${github.org}/${repo}`}>
                  {github.org}/{repo}
                </a>
              </li>
            ))
          }
        </ul>
       ): (
          <div>loading...</div>
       )}
     </div>
   </div>
  );
});


