let storiesCreated = 0;

$(".directions-container").submit(function(e) {
    e.preventDefault();
    storiesCreated = storiesCreated + 1;
    let name = $(".name-input").val();
    let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let time = $(".number-input").val();
    $(".story").append("<p>My Wife was cheating on me with my friend " + name + ", so I got on my " + transport + "  and ran them over. The police were called and they were " + adjective + ". I was found guilty of murder I'm spending " + time + " years in jail... </p>");
    $(".count").text(storiesCreated);
});