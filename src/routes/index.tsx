import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const github = {
    org: 'ys1113457623',
    repos: ['ys1113457623', 'flutter_portfolio','API','Programming-Paradigms'] as string[] | null,

  }
  
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


