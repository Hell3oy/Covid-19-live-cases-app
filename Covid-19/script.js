
    var Country_input = document.getElementById("Country_input");
    var Search_button = document.getElementById("Search_button");

    Search_button.addEventListener("click", 
    function (){
        fetch("https://coronavirus-19-api.herokuapp.com/countries/" + Country_input.value)
        .then( (load_data) => {
            return load_data.json();
        })
        .then( (json_data) => {
            console.log(json_data);
            Covid = [json_data];
            Covid_data();
        })
        .catch( (error) => {
            console.log(error)
        })
    })
    
    function Covid_data(){
        for(i = 0; i<Covid.length; i++){
            document.getElementById('Output_section').innerHTML = 
            `
            <div class = "#">Country            :${Covid[i].country}</div>
            <div class = "#">Active case        :${Covid[i].cases}</div>
            <div class = "#">Recovered          :${Covid[i].recovered}</div>            
            <div class = "#">Deaths             :${Covid[i].deaths}</div>
            <div class = "#">Today Cases        :${Covid[i].todayCases}</div>
            <div class = "#">TodayDeaths        :${Covid[i].todayDeaths}</div>            
            <div class = "#">Critical           :${Covid[i].critical}</div>
            <div class = "#">CasesPerOneMillion :${Covid[i].casesPerOneMillion}</div>
            <div class = "#">DeathsPerOneMillion:${Covid[i].deathsPerOneMillion}</div>
            <div class = "#">TotalTests         :${Covid[i].totalTests}</div>
            <div class = "#">TestsPerOneMillion :${Covid[i].testsPerOneMillion}</div>
            `
            ;
        }
       
    }

    
