$(document).ready(function(){
    // document.getElementById("sidebar-toggler").defaultChecked;
    if($("#sidebar-toggler").is(":checked")){
        $(".sidebar-nav-container").addClass("large-sidebar");
        $(".dashboard-container").addClass("padding-left-added");
    };
    
    $("#sidebar-toggler").on("change", function() {
        if($("#sidebar-toggler").is(":checked")){
            $(".sidebar-nav-container").addClass("large-sidebar");
            $(".dashboard-container").addClass("padding-left-added");
        } else {
            $(".sidebar-nav-container").removeClass("large-sidebar");
            $(".dashboard-container").removeClass("padding-left-added");
        }

    });

    const chartDoughnut = document.getElementById("myChart")

    new Chart(chartDoughnut, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'My First Dataset',
                data: [300, 70, 70, 30],
                backgroundColor: [
                'rgb(154, 218, 255)',
                'rgb(255, 226, 228)',
                'rgb(73, 73, 73)',
                'rgb(37, 107, 43)'
                ],
                hoverOffset: 4
            }]
        }
      });

})