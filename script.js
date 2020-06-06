class Tweet {
    tweetText;
    episodeTitle;
    mediaUrl;
    tweetUrl;
    episodeUrl;
    episode;
    /**
     * @param 
     */
    date;
}

var pageBody;

/**
 * @param {Tweet[]} tweets 
 */
function setTweets(tweets) {
    let tweetList = document.createElement('div');
    tweetList.classList.add('tweetList');

    for(let tweet of tweets.filter(possiblyBlankTweet => possiblyBlankTweet.episode !== 0)) {
        let profilePictureContainer = document.createElement('img');
        profilePictureContainer.classList.add('profilePicture');
        profilePictureContainer.src = 'images/Profile_Picture.jpg';

        let nameContainer = document.createElement('span');
        nameContainer.classList.add('name');
        nameContainer.innerText = 'Ten Minute Podcast';

        let handleContainer = document.createElement('span');
        handleContainer.classList.add('handle')
        handleContainer.innerText = '@TenMinPod';

        let dateContainer = document.createElement('span');
        dateContainer.classList.add('date');
        dateContainer.innerText = tweet.date.toLocaleDateString();

        let photoUrlContainer = document.createElement('a');
        photoUrlContainer.classList.add('photoUrl');
        photoUrlContainer.href = tweet.mediaUrl;
        photoUrlContainer.innerText = `pic.twitter.com/${btoa(Math.floor(Math.random() * 1000000))}`;

        let textContainer = document.createElement('span');
        textContainer.classList.add('text');
        textContainer.innerText = `${tweet.tweetText} `;
        textContainer.appendChild(photoUrlContainer);

        let leftSection = document.createElement('span');
        leftSection.classList.add('leftSection');
        leftSection.appendChild(profilePictureContainer);

        let topSection = document.createElement('div');
        topSection.classList.add('topSection');
        topSection.appendChild(nameContainer);
        topSection.appendChild(handleContainer);
        topSection.appendChild(dateContainer);

        let bottomSection = document.createElement('div');
        bottomSection.classList.add('bottomSection');
        bottomSection.appendChild(textContainer);

        let rightSection = document.createElement('span');
        rightSection.classList.add('rightSection');
        rightSection.appendChild(topSection);
        rightSection.appendChild(bottomSection);

        let tweetContainer = document.createElement('div');
        tweetContainer.classList.add('tweet');
        tweetContainer.appendChild(leftSection);
        tweetContainer.appendChild(rightSection);

        tweetList.appendChild(tweetContainer);
    }

    pageBody.appendChild(tweetList);
}

var onLoad = () => {
    pageBody = document.querySelector('body');

    let headerContainer = document.createElement('div');
    headerContainer.classList.add('header');
    pageBody.appendChild(headerContainer);

    setTweets([
        {
            date: new Date(`2/22/2012`),
            episode: 3,
            episodeTitle: `Disguise Hat`,
            episodeUrl: ``,
            mediaUrl: `images/Chris_Disguise.jpg`,
            tweetText: `Here's the "disguise" Chris talked about on today's #TenMinutePodcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/172544945608073217?s=20`
        },
        {
            date: new Date(`3/8/2012`),
            episode: 10,
            episodeTitle: `So British`,
            episodeUrl: ``,
            mediaUrl: `images/Chris_Wait_Tweet.jpg`,
            tweetText: `Today's ep uploaded late to iTunes bit.ly/wRHxIT so @chrisdelia had to wait to tweet and got mad at @WillSasso.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/177937759091171328?s=20`
        },
        {
            date: new Date(`6/6/2012`),
            episode: 33,
            episodeTitle: `Dickinround`,
            episodeUrl: ``,
            mediaUrl: `images/New_Website_Art.jpg`,
            tweetText: `After yesterday's show, we're thinking of changing our webiste art. Thanks to listener @PoppaYacht for the inspiration`,
            tweetUrl: `https://twitter.com/TenMinPod/status/210539914947858432?s=20`
        },
        {
            date: new Date(`6/27/2012`),
            episode: 24,
            episodeTitle: `Dumb as S**t Sauce`,
            episodeUrl: ``,
            mediaUrl: `images/Will_Sasso_Dumb_As_Shit_Tattoo.jpg`,
            tweetText: `Thanks @binoytan for this fantastic rendering of the tattoo @WillSasso described in the "Dumb as Shit Sauce" episode`,
            tweetUrl: `https://twitter.com/TenMinPod/status/218160664336801793?s=20`
        },
        {
            date: new Date(`7/6/2012`),
            episode: 32,
            episodeTitle: `All About Bryan`,
            episodeUrl: ``,
            mediaUrl: `images/Doin_Stuff_Doin_Stuff_Like_Real_Shit_In_Hollywood.jpg`,
            tweetText: `Thanks @ChrisHoldenDev for this book cover concept from the "All About Bryan" episode.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/221331172712648705?s=20`
        },
        {
            date: new Date(`7/14/2012`),
            episode: 28,
            episodeTitle: `Last Words`,
            episodeUrl: ``,
            mediaUrl: `images/Bryan_Callen_I_Did_It_All.jpg`,
            tweetText: `Thanks @binoytan for another amazing piece! @bryancallens's "I DID IT AAAAALLLLL!!!" from the "Last Words" episode.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/224292611203137536?s=20`
        },
        {
            date: new Date(`7/14/2012`),
            episode: 39,
            episodeTitle: `In Twenty Years`,
            episodeUrl: ``,
            mediaUrl: `images/Bit_Killer_Jaws.jpg`,
            tweetText: `Thanks @_atoro for this movie poster version of @bryancallen's nickname, revealed in the "In Twenty Years" episode.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/224293044902572032?s=20`
        },
        {
            date: new Date(`11/5/2012`),
            episode: 5,
            episodeTitle: `Wrestling and Farts`,
            episodeUrl: ``,
            mediaUrl: `images/Blue_Streak.jpg`,
            tweetText: `Thanks @Yoshicat77 for this blue streak movie poster featuring @chrisdelia. Funny reviews at the bottom! Haha ha hehe!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/265529091363577856?s=20`
        },
        {
            date: new Date(`11/7/2012`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            mediaUrl: `images/Dough_Goat_Drawing.jpg`,
            tweetText: `Thanks @Gnarly_Chavi for sketching @bryancallen and a dough goat. Nice dough goat, dude!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/266243498129367040?s=20`
        },
        {
            date: new Date(`11/7/2012`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            mediaUrl: `images/Ten_Minute_Dough_Goats.jpg`,
            tweetText: `Thanks @BenjiArney for this pic of @chrisdelia and @WillSasso couple one two dough goats that they are.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/266254358281338880?s=20`
        },
        {
            date: new Date(`11/7/2012`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            mediaUrl: `images/Ten_Minute_Dough_Goats_2.jpg`,
            tweetText: `Thanks @VaheKevork for this very creepy pic of a couple one two three dough goats.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/267023208044191745?s=20`
        },
        {
            date: new Date(`11/13/2012`),
            episode: 77,
            episodeTitle: `Bit Killer Jones`,
            episodeUrl: ``,
            mediaUrl: `images/Bryan_Gothem_Show_Times.jpg`,
            tweetText: `Here's the pic @chrisdelia mentioned on today's episode of @bryancallen's upcoming dates at @GothamComedy`,
            tweetUrl: `https://twitter.com/TenMinPod/status/268429292248133632?s=20`
        },
        {
            date: new Date(`11/23/2012`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            mediaUrl: `images/Row_Dough_Goats.jpg`,
            tweetText: `Thanks @rpasillas for this fantastic pic of the guys as a couple one two three dough goats. Fuckin dough goats.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/272136132257525760?s=20`
        },
        //TODO: Will sasso naked meat picture? https://twitter.com/TenMinPod/status/278657651833987074?s=20
        //TODO: Bryan texting pukitzer instead of pluitzer? https://twitter.com/TenMinPod/status/282020915271831552?s=20
        //TODO: I thought it was gonna make like twelve dollars quote? https://twitter.com/TenMinPod/status/286667543958142977?s=20
        {
            date: new Date(`2/1/2013`),
            episode: 100,
            episodeTitle: `100th Episode`,
            episodeUrl: ``,
            mediaUrl: `images/Chris_Likes_Wills_Beverages.jpg`,
            tweetText: `If you heard yesterday's podcast, this exchange between @WillSasso and @chrisdelia makes sense.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/297524386854998016?s=20`
        },
        {
            date: new Date(`2/6/2013`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            mediaUrl: `images/Disturbing_Dough_Goats.jpg`,
            tweetText: `Hey @AdamJPelletier the whole "doughgoat" thing is funny and all but this pic you made is REEEALLY super disturbing!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/299038344615182336?s=20`
        },
        //TODO: Should I keep this one? It's a RT
        {
            date: new Date(`2/12/2013`),
            episode: 104,
            episodeTitle: `Bryan's Science World Body`,
            episodeUrl: ``,
            mediaUrl: `images/Bryan_Callen_Science_World_Body.jpg`,
            tweetText: `@TenMinPod Is this @bryancallen science world body?`,
            tweetUrl: `https://twitter.com/Edtrevino32/status/301454370501951488?s=20`
        },
        {
            date: new Date(`2/13/2013`),
            episode: 55,
            episodeTitle: `Dolphin With a Handgun`,
            episodeUrl: ``,
            mediaUrl: `images/Dolphin_With_A_Handgun.jpg`,
            tweetText: `Thanks @Kishwick for geeking up this Dolphin with a Handgun movie poster! The 1920s gangster theme is a cool choice.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/301583164835516416?s=20`
        },
        //TODO: Chris hacks bryan's twitter: https://twitter.com/TenMinPod/status/304449296487571456?s=20
        {
            date: new Date(`2/27/2013`),
            episode: 110,
            episodeTitle: `Shit in Shoes`,
            episodeUrl: ``,
            mediaUrl: `videos/Shit_In_Shoes.mp4`,
            tweetText: `Hey, check it out! We're recording! :D`,
            tweetUrl: `https://twitter.com/TenMinPod/status/306989736067756034?s=20`
        },
        {
            date: new Date(`2/28/2013`),
            episode: 109,
            episodeTitle: `I'm the busiest`,
            episodeUrl: ``,
            mediaUrl: `images/Grown_Man_School_Boy_Full_Grown_Skater.jpg`,
            tweetText: `Per today's episode, here's grown man schoolboy @bryancallen and fully adult skater @chrisdelia.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/307226096468901890?s=20`
        },
        {
            date: new Date(`3/26/2013`),
            episode: 116,
            episodeTitle: `Yeeeeeaaaahhh`,
            episodeUrl: ``,
            mediaUrl: `images/Chris_Says_Yeah.jpg`,
            tweetText: `Thanks @rpasillas for this vivid illustration of the point @chrisdelia made on today's show about Paul Giamatti`,
            tweetUrl: `https://twitter.com/TenMinPod/status/316670198558109696?s=20`
        },
        //Bryan with his pants off? https://twitter.com/TenMinPod/status/319590958045990912?s=20
        {
            date: new Date(`4/9/2013`),
            episode: 120,
            episodeTitle: `Off The Grid`,
            episodeUrl: ``,
            mediaUrl: `images/Christian_Kings_Jagged_Rocks.jpg`,
            tweetText: `Thanks @Simonodon19 for this portraiture of @bryancallen and @WillSasso casting @chrisdelia down to the jagged rock.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/321712325352644609?s=20`
        },
        {
            date: new Date(`4/16/2013`),
            episode: 122,
            episodeTitle: `Back-UHlone`,
            episodeUrl: ``,
            mediaUrl: `images/Bryan_Pants_Off.jpg`,
            tweetText: `Here's the picture the guys were talking about at the top of today's show. Congratulations ot everyone involved.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/324329831313571840?s=20`
        },
        {
            date: new Date(`4/22/2013`),
            episode: 123,
            episodeTitle: `Jacked and Yolked`,
            episodeUrl: ``,
            mediaUrl: `images/Better_Than_Oblivion.jpg`,
            tweetText: `Thanks @Ashleyash27 for this perfectly accurate review of last Thursday's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/326465559136964610?s=20`
        },
        {
            date: new Date(`4/30/2013`),
            episode: 126,
            episodeTitle: `Jealous Sz'Fuck`,
            episodeUrl: ``,
            mediaUrl: `images/Arguing_Like_An_Asshole.jpg`,
            tweetText: `Here's a sampling of the shitty faces @bryancallen was making while arguing like an asshole on today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/329323133154775041?s=20`
        },
        {
            date: new Date(`6/4/2013`),
            episode: 136,
            episodeTitle: `Hey Will Do Standup`,
            episodeUrl: ``,
            mediaUrl: `images/Bryan_And_Bobby_Yell_At_Will.jpg`,
            tweetText: `Here's the pic(s) @WillSasso took of @bobbyleelive and @bryancallen yelling at him during today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/341994255604133889?s=20`
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            mediaUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
    ])

    let footerContainer = document.createElement('div');
    footerContainer.classList.add('footer');
    pageBody.appendChild(footerContainer);
}