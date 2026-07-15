const singleQueryBtn=document.getElementById("single-query-btn");
const battleModeBtn=document.getElementById("battle-mode-btn");

const singleSection=document.getElementById("singleQuery-section");
const battleSection=document.getElementById("battle-section");

const singleForm=document.getElementById("singleform-Input");
const singleInput=document.getElementById("single-input");

const singleCardProfile=document.getElementById("cardProfile");
const singleDemoResult=document.getElementById("single-result");
const loading=document.getElementById("loading");

const battleModeForm=document.getElementById("battleMode-form");
const battleInput1=document.getElementById('battle-input-1');
const battleInput2=document.getElementById("battle-input-2")
const battledemoResult=document.getElementById("demo-result");
const loading1=document.getElementById("loading1")
const battleResult=document.getElementById("battle-result");


singleSection.style.display="block";
battleSection.style.display="none";
singleQueryBtn.style.backgroundColor="#18B797"
singleQueryBtn.style.color="black"

singleDemoResult.style.display="block";
singleCardProfile.style.display="none";

singleQueryBtn.addEventListener("click",()=>{
    singleQueryBtn.style.backgroundColor="#18B797"
    singleQueryBtn.style.color="black"
    singleSection.style.display="block";
    battleSection.style.display="none";
    battleModeBtn.style.backgroundColor="transparent"
    battleModeBtn.style.color="white"

})

battleModeBtn.addEventListener("click",()=>{
    battleModeBtn.style.backgroundColor="#18B797";
    battleModeBtn.style.color="black";
    battleSection.style.display="block";
    singleSection.style.display="none";
    singleQueryBtn.style.backgroundColor="transparent"
    singleQueryBtn.style.color="white"
})


singleForm.addEventListener("submit",async(event)=>{
    event.preventDefault();
    loading.classList.remove("hidden");
    singleDemoResult.style.display="none";
    singleCardProfile.style.display="none";

    try {
    const username=singleInput.value;
    const url=`https://api.github.com/users/${username}`;

    const response=await fetch(url);
    if(!response.ok) {
        loading.classList.add("hidden");

        singleDemoResult.style.display = "block";
        singleDemoResult.innerHTML = `
            <h2 class="text-red-500 text-xl font-bold">
                User Not Found
            </h2>
        `;
    };

    const result=await response.json();
    const repoResponse = await fetch(result.repos_url);
    const repos = await repoResponse.json();
    const latestRepo=repos.slice(0,5);

    loading.classList.add("hidden");
    singleCardProfile.style.display="block";

    singleCardProfile.innerHTML=`
    <div class="p-10">
                    <!--profile section-->
                    <div class="flex gap-10">
                        <!--profile Img-->
                        <div class="w-32 h-32 border border-neon shadow-2xl">
                           <img class="w-full h-full object-cover" src="${result.avatar_url}" alt="${result.login}">
                        </div>
                        <!--profile deatil-->
                        <div class="">
                            <div class="space-y-4">
                                <div class="space-y-2">
                                <span class="text-neon tracking-widest text-sm">@ ${result.login}</span>
                                <h1 class="text-3xl font-bold">${result.name ?? "No Name"}</h1>
                                 </div>
                                <p class="text-[#868e9c]">${result.bio ?? "No Bio Available"}</p>   
                            </div>

                            <span class="border w-full border-[#2a2f36] flex my-5"></span>

                            <div class="flex justify-between items-center">
                                <div class="space-y-2">
                                    <p1 class="text-[#2a2f36] tracking-widest">REPOS</p1>
                                    <h2>${result.public_repos}</h2>
                                </div>
                                <div class="space-y-2">
                                    <p1 class="text-[#2a2f36] tracking-widest">followers</p1>
                                    <h2>${result.followers}</h2>
                                </div>
                                <div class="space-y-2">
                                    <p class="text-[#2a2f36] tracking-widest">following</p>
                                    <h2>${result.following}</h2>
                                </div>
                            </div>

                            <span class="border w-full border-[#2a2f36] flex my-5"></span>

                            <div class="space-y-3">
                                <div class="flex items-center gap-10">
                                    <h2 class="tracking-widest text-[#2a2f36]">JOINED</h2>
                                    <p>${new Date(result.created_at).toDateString()}</p>
                                </div>
                                <div class="flex items-center gap-10">
                                    <h2 class="tracking-widest text-[#2a2f36]">LOCATION</h2>
                                    <p>${result.location ?? "Not Available"}</p>
                                </div>
                                <div class="flex items-center gap-10">
                                    <h2 class="tracking-widest text-[#2a2f36]">PORTFOLIO</h2>
                                    <a href="${result.blog}" target="_blank">
                                     ${result.blog || "None"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <span class="border w-full border-[#2a2f36] flex my-5"></span>

                    <!--repositories section-->
                    <h1 class="tracking-widest text-[#868e9c] text-sm">/// Latest 5 repositories</h1>
                    
                     ${ latestRepo.map((repo)=>` 
                        <div class="flex justify-between items-center my-5 cursor-pointer hover:bg-surface p-4 hover:text-neon">
                            <div class="space-y-2">
                                <a href="${repo.html_url}" target="_blank">
                                   <h2 class="text-xl font-bold">${repo.name}</h2>
                               </a>
                                <p class="text-sm tracking-widest text-[#2a2f36]">pushed ${new Date(repo.pushed_at).toDateString()}</p>
                            </div>
                            <div class="flex gap-5">
                                <span class="text-amber">⭐ </span>
                                <p class="text-amber">${repo.stargazers_count}</p>
                                <h2 class="tracking-widest text-[#868e9c]">${repo.language ?? "Unknown"}</h2>
                            </div>

                         
                         </div>
                         <span class="border w-full border-[#2a2f36] flex my-5"></span>

         `).join("")}

                 </div>
    `;

    } catch (error) {
        
        loading.classList.add("hidden");

        singleDemoResult.style.display = "block";
        singleDemoResult.innerHTML = `
            <h2 class="text-red-500 text-xl font-bold">
                User Not Found
            </h2>
        `;

        console.log(error.message);
        
    }
})



battleModeForm.addEventListener("submit",async(event)=>{
    event.preventDefault();
    battledemoResult.style.display="none";
    loading1.classList.remove("hidden");
    battleResult.style.display="none";

    try {
        const username1=battleInput1.value;
        const username2=battleInput2.value;
        const url1=`https://api.github.com/users/${username1}`;
        const url2=`https://api.github.com/users/${username2}`;

        const response=await Promise.all([fetch(url1),fetch(url2)]);
        console.log("response",response)

        const data1=await response[0].json();
        const data2=await response[1].json();
        
        const repoResponse=await Promise.all([fetch(data1.repos_url),fetch(data2.repos_url)]);
        if(!repoResponse.ok){
             loading1.classList.add("hidden");
             battleResult.style.display = "block";
             battleResult.innerHTML = `
            <h2 class="text-red-500 text-xl font-bold">
                User Not Found
            </h2>
            `
        }
        const reposData1=await repoResponse[0].json();
        const reposData2=await repoResponse[1].json();


        const stars1 = reposData1.reduce(
          (sum, repo) => sum + repo.stargazers_count, 0);

       const stars2 = reposData2.reduce(
         (sum, repo) => sum + repo.stargazers_count,0);

         loading1.classList.add("hidden");
             battleResult.style.display="block";


         battleResult.innerHTML = `
         <div class="grid md:grid-cols-2 gap-10">

         ${createProfileCard(
             data1,
             reposData1,
             stars1 > stars2 ? "border-green-500" : "border-red-500"
         )}

         ${createProfileCard(
             data2,
             reposData2,
             stars2 > stars1 ? "border-green-500" : "border-red-500"
         )}

         </div>
         `;
         
        
    } catch (error) {
         loading1.classList.add("hidden");

        battleResult.style.display = "block";
        battleResult.innerHTML = `
            <h2 class="text-red-500 text-xl font-bold">
                User Not Found
            </h2>
            `
        
    }

})


function createProfileCard(user, repos, borderColor) {

    const totalStars = repos.reduce((sum, repo) => {
        return sum + repo.stargazers_count;
    }, 0);

    const latestRepos = repos.slice(0, 5);

    return `
    <div>
    ${borderColor=="border-green-500" ? "<h1>Winner</h1>" : "<h1>Looser</h1>"}
    <div class="bg-[#050505] border-2 ${borderColor} mt-10 shadow-2xl">

        <div class="p-10">

            <div class="flex gap-10">

                <div class="w-32 h-32 border-2 ${borderColor}">
                    <img
                        src="${user.avatar_url}"
                        class="w-full h-full object-cover"
                    >
                </div>

                <div>

                    <span class="text-neon">@${user.login}</span>

                    <h1 class="text-3xl font-bold">
                        ${user.name ?? "No Name"}
                    </h1>

                    <p>${user.bio ?? "No Bio"}</p>

                    <div class="mt-5">
                        ⭐ Total Stars : ${totalStars}
                    </div>

                </div>

            </div>

            <hr class="my-6">

            <h2>Latest Repositories</h2>

            ${latestRepos.map(repo=>`

                <a
                    href="${repo.html_url}"
                    target="_blank"
                    class="flex justify-between mt-4 hover:text-neon"
                >

                    <span>${repo.name}</span>

                    <span>
                        ⭐ ${repo.stargazers_count}
                    </span>

                </a>

            `).join("")}

        </div>

    </div>
    </div>
    `;
}

