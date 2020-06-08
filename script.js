class Tweet {
    tweetText;
    episodeTitle;
    photoUrl;
    videoUrl;
    tweetUrl;
    episodeUrl;
    episode;
    /**
     * @param 
     */
    date;
}

/**
 * @param {Tweet[]} tweets 
 */
function setTweets(tweets) {
    let tweetList = document.querySelector('.tweetList');

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

        let textContainer = document.createElement('span');
        textContainer.classList.add('text');
        textContainer.innerText = tweet.tweetText;

        let leftSection = document.createElement('span');
        leftSection.classList.add('leftSection');
        leftSection.appendChild(profilePictureContainer);

        let topSection = document.createElement('div');
        topSection.classList.add('topSection');
        topSection.appendChild(nameContainer);
        topSection.appendChild(handleContainer);
        topSection.appendChild(dateContainer);

        let middleSection = document.createElement('div');
        middleSection.classList.add('middleSection');
        middleSection.appendChild(textContainer);

        let rightSection = document.createElement('span');
        rightSection.classList.add('rightSection');
        rightSection.appendChild(topSection);
        rightSection.appendChild(middleSection);

        let tweetContainer = document.createElement('button');
        tweetContainer.classList.add('tweet');
        tweetContainer.appendChild(leftSection);
        tweetContainer.appendChild(rightSection);

        tweetList.appendChild(tweetContainer);
    }
}

// .replace(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g, url => {
//             return `<a href="https://${url}">${url}</a>`;
//         }).replace(/@\w+/g, handle => {
//             return `<a href="https://twitter.com/${handle.replace('@', '')}">${handle}</a>`;
//         }).replace(/#\w+/g, hashtag => {
//             return `<a href="https://twitter.com/hashtag/${hashtag.replace('#', '')}">${hashtag}</a>`;
//         })}`

// let mediaPreviewContainer;
// if(tweet.photoUrl !== undefined) {
//     //TODO: Surround image in button, focus styling remove height limit and transition to full.
//     mediaPreviewContainer = document.createElement('img');
//     mediaPreviewContainer.classList.add('mediaPreview');
//     mediaPreviewContainer.setAttribute('loading', 'lazy');
//     mediaPreviewContainer.src = tweet.photoUrl;
// }

// if(tweet.videoUrl !== undefined) {
//     let videoSource = document.createElement('source');
//     videoSource.src = tweet.videoUrl;
//     videoSource.type = 'video/mp4';

//     mediaPreviewContainer = document.createElement('video');
//     mediaPreviewContainer.classList.add('mediaPreview');
//     mediaPreviewContainer.setAttribute('controls', true);
//     mediaPreviewContainer.setAttribute('loop', true);
//     mediaPreviewContainer.appendChild(videoSource);
// }

// let bottomSection = document.createElement('div');
// bottomSection.classList.add('bottomSection');
// bottomSection.appendChild(mediaPreviewContainer);

var onLoad = () => {
    setTweets([
        {
            date: new Date(`2/22/2012`),
            episode: 3,
            episodeTitle: `Disguise Hat`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Disguise.jpg`,
            tweetText: `Here's the "disguise" Chris talked about on today's #TenMinutePodcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/172544945608073217?s=20`
        },
        {
            date: new Date(`3/8/2012`),
            episode: 10,
            episodeTitle: `So British`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Wait_Tweet.jpg`,
            tweetText: `Today's ep uploaded late to iTunes bit.ly/wRHxIT so @chrisdelia had to wait to tweet and got mad at @WillSasso.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/177937759091171328?s=20`
        },
        {
            date: new Date(`6/6/2012`),
            episode: 33,
            episodeTitle: `Dickinround`,
            episodeUrl: ``,
            photoUrl: `images/New_Website_Art.jpg`,
            tweetText: `After yesterday's show, we're thinking of changing our webiste art. Thanks to listener @PoppaYacht for the inspiration`,
            tweetUrl: `https://twitter.com/TenMinPod/status/210539914947858432?s=20`
        },
        {
            date: new Date(`6/27/2012`),
            episode: 24,
            episodeTitle: `Dumb as S**t Sauce`,
            episodeUrl: ``,
            photoUrl: `images/Will_Sasso_Dumb_As_Shit_Tattoo.jpg`,
            tweetText: `Thanks @binoytan for this fantastic rendering of the tattoo @WillSasso described in the "Dumb as Shit Sauce" episode`,
            tweetUrl: `https://twitter.com/TenMinPod/status/218160664336801793?s=20`
        },
        {
            date: new Date(`7/6/2012`),
            episode: 32,
            episodeTitle: `All About Bryan`,
            episodeUrl: ``,
            photoUrl: `images/Doin_Stuff_Doin_Stuff_Like_Real_Shit_In_Hollywood.jpg`,
            tweetText: `Thanks @ChrisHoldenDev for this book cover concept from the "All About Bryan" episode.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/221331172712648705?s=20`
        },
        {
            date: new Date(`7/14/2012`),
            episode: 28,
            episodeTitle: `Last Words`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Callen_I_Did_It_All.jpg`,
            tweetText: `Thanks @binoytan for another amazing piece! @bryancallens's "I DID IT AAAAALLLLL!!!" from the "Last Words" episode.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/224292611203137536?s=20`
        },
        {
            date: new Date(`7/14/2012`),
            episode: 39,
            episodeTitle: `In Twenty Years`,
            episodeUrl: ``,
            photoUrl: `images/Bit_Killer_Jaws.jpg`,
            tweetText: `Thanks @_atoro for this movie poster version of @bryancallen's nickname, revealed in the "In Twenty Years" episode.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/224293044902572032?s=20`
        },
        {
            date: new Date(`11/5/2012`),
            episode: 5,
            episodeTitle: `Wrestling and Farts`,
            episodeUrl: ``,
            photoUrl: `images/Blue_Streak.jpg`,
            tweetText: `Thanks @Yoshicat77 for this blue streak movie poster featuring @chrisdelia. Funny reviews at the bottom! Haha ha hehe!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/265529091363577856?s=20`
        },
        {
            date: new Date(`11/7/2012`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            photoUrl: `images/Dough_Goat_Drawing.jpg`,
            tweetText: `Thanks @Gnarly_Chavi for sketching @bryancallen and a dough goat. Nice dough goat, dude!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/266243498129367040?s=20`
        },
        {
            date: new Date(`11/7/2012`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            photoUrl: `images/Ten_Minute_Dough_Goats.jpg`,
            tweetText: `Thanks @BenjiArney for this pic of @chrisdelia and @WillSasso couple one two dough goats that they are.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/266254358281338880?s=20`
        },
        {
            date: new Date(`11/7/2012`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            photoUrl: `images/Ten_Minute_Dough_Goats_2.jpg`,
            tweetText: `Thanks @VaheKevork for this very creepy pic of a couple one two three dough goats.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/267023208044191745?s=20`
        },
        {
            date: new Date(`11/13/2012`),
            episode: 77,
            episodeTitle: `Bit Killer Jones`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Gothem_Show_Times.jpg`,
            tweetText: `Here's the pic @chrisdelia mentioned on today's episode of @bryancallen's upcoming dates at @GothamComedy`,
            tweetUrl: `https://twitter.com/TenMinPod/status/268429292248133632?s=20`
        },
        {
            date: new Date(`11/23/2012`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            photoUrl: `images/Row_Dough_Goats.jpg`,
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
            photoUrl: `images/Chris_Likes_Wills_Beverages.jpg`,
            tweetText: `If you heard yesterday's podcast, this exchange between @WillSasso and @chrisdelia makes sense.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/297524386854998016?s=20`
        },
        {
            date: new Date(`2/6/2013`),
            episode: 75,
            episodeTitle: `Dough Goats`,
            episodeUrl: ``,
            photoUrl: `images/Disturbing_Dough_Goats.jpg`,
            tweetText: `Hey @AdamJPelletier the whole "doughgoat" thing is funny and all but this pic you made is REEEALLY super disturbing!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/299038344615182336?s=20`
        },
        //TODO: Should I keep this one? It's a RT
        {
            date: new Date(`2/12/2013`),
            episode: 104,
            episodeTitle: `Bryan's Science World Body`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Callen_Science_World_Body.jpg`,
            tweetText: `@TenMinPod Is this @bryancallen science world body?`,
            tweetUrl: `https://twitter.com/Edtrevino32/status/301454370501951488?s=20`
        },
        {
            date: new Date(`2/13/2013`),
            episode: 55,
            episodeTitle: `Dolphin With a Handgun`,
            episodeUrl: ``,
            photoUrl: `images/Dolphin_With_A_Handgun.jpg`,
            tweetText: `Thanks @Kishwick for geeking up this Dolphin with a Handgun movie poster! The 1920s gangster theme is a cool choice.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/301583164835516416?s=20`
        },
        //TODO: Chris hacks bryan's twitter: https://twitter.com/TenMinPod/status/304449296487571456?s=20
        {
            date: new Date(`2/27/2013`),
            episode: 110,
            episodeTitle: `Shit in Shoes`,
            episodeUrl: ``,
            videoUrl: `videos/Shit_In_Shoes.mp4`,
            tweetText: `Hey, check it out! We're recording! :D`,
            tweetUrl: `https://twitter.com/TenMinPod/status/306989736067756034?s=20`
        },
        {
            date: new Date(`2/28/2013`),
            episode: 109,
            episodeTitle: `I'm the busiest`,
            episodeUrl: ``,
            photoUrl: `images/Grown_Man_School_Boy_Full_Grown_Skater.jpg`,
            tweetText: `Per today's episode, here's grown man schoolboy @bryancallen and fully adult skater @chrisdelia.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/307226096468901890?s=20`
        },
        {
            date: new Date(`3/26/2013`),
            episode: 116,
            episodeTitle: `Yeeeeeaaaahhh`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Says_Yeah.jpg`,
            tweetText: `Thanks @rpasillas for this vivid illustration of the point @chrisdelia made on today's show about Paul Giamatti`,
            tweetUrl: `https://twitter.com/TenMinPod/status/316670198558109696?s=20`
        },
        //Bryan with his pants off? https://twitter.com/TenMinPod/status/319590958045990912?s=20
        {
            date: new Date(`4/9/2013`),
            episode: 120,
            episodeTitle: `Off The Grid`,
            episodeUrl: ``,
            photoUrl: `images/Christian_Kings_Jagged_Rocks.jpg`,
            tweetText: `Thanks @Simonodon19 for this portraiture of @bryancallen and @WillSasso casting @chrisdelia down to the jagged rock.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/321712325352644609?s=20`
        },
        {
            date: new Date(`4/16/2013`),
            episode: 122,
            episodeTitle: `Back-UHlone`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Pants_Off.jpg`,
            tweetText: `Here's the picture the guys were talking about at the top of today's show. Congratulations ot everyone involved.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/324329831313571840?s=20`
        },
        {
            date: new Date(`4/22/2013`),
            episode: 123,
            episodeTitle: `Jacked and Yolked`,
            episodeUrl: ``,
            photoUrl: `images/Better_Than_Oblivion.jpg`,
            tweetText: `Thanks @Ashleyash27 for this perfectly accurate review of last Thursday's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/326465559136964610?s=20`
        },
        {
            date: new Date(`4/30/2013`),
            episode: 126,
            episodeTitle: `Jealous Sz'Fuck`,
            episodeUrl: ``,
            photoUrl: `images/Arguing_Like_An_Asshole.jpg`,
            tweetText: `Here's a sampling of the shitty faces @bryancallen was making while arguing like an asshole on today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/329323133154775041?s=20`
        },
        {
            date: new Date(`6/4/2013`),
            episode: 136,
            episodeTitle: `Hey Will Do Standup`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_And_Bobby_Yell_At_Will.jpg`,
            tweetText: `Here's the pic(s) @WillSasso took of @bobbyleelive and @bryancallen yelling at him during today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/341994255604133889?s=20`
        },
        {
            date: new Date(`6/13/2013`),
            episode: 138,
            episodeTitle: `Sexually Transmitted D'Bees`,
            episodeUrl: ``,
            videoUrl: `videos/Ten_Minute_Bees.mp4`,
            tweetText: `Hey, did you guys like Tuesday's podcast? Pretty good, huh? #cuntbees`,
            tweetUrl: `https://twitter.com/TenMinPod/status/345074747341676544?s=20`
        },
        {
            date: new Date(`6/13/2013`),
            episode: 139,
            episodeTitle: `The Boys are Back in Town`,
            episodeUrl: ``,
            photoUrl: `images/Sunglasses_Inside.jpg`,
            tweetText: `Here's @chrisdelia wearing sunglasses inside. Even though there's clearly no reason. And that's obvious. #cuntbees`,
            tweetUrl: `https://twitter.com/TenMinPod/status/345248067894771712?s=20`
        },
        {
            date: new Date(`7/3/2013`),
            episode: 137,
            episodeTitle: `Everybody's Dad Invests His Money`,
            episodeUrl: ``,
            photoUrl: `images/Ten_Minute_Pie_Crust.jpg`,
            tweetText: `Thanks @TheVEALCHOP for geeking up this pie crust featuring a rendering of Everybody's Dad by the brilliant @pants!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/352528932404350976?s=20`
        },
        {
            date: new Date(`7/16/2013`),
            episode: 148,
            episodeTitle: `Bryan Neeeeeds Fame`,
            episodeUrl: ``,
            photoUrl: `images/Five_Finger_Point.jpg`,
            tweetText: `Here's @chrisdelia giving @bryancallen the "five finger point" and sincerely juss'tryn t'helpm.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/357222512150577152?s=20`
        },
        //Bryan can't record another episode? https://twitter.com/TenMinPod/status/359585187266428928?s=20
        {
            date: new Date(`7/23/2013`),
            episode: 150,
            episodeTitle: `Dude Joke Lady Hair`,
            episodeUrl: ``,
            photoUrl: `images/Head_Calf.jpg`,
            tweetText: `Here's the pic of @WillSasso's calf and @bryancallen's head that The Mesomorphic Minotaur referred to on today's ep.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/359753350180376576?s=20`
        },
        {
            date: new Date(`7/26/2013`),
            episode: 138,
            episodeTitle: `Sexually Transmitted D'Bees`,
            episodeUrl: ``,
            photoUrl: `images/Sorry_About_The_Cunt_Bees.jpg`,
            tweetText: `Thanks for baking @bryancallen this cake @AmazonAmi. Let's hope it lures the cunt bees out of his pants. #cuntbees`,
            tweetUrl: `https://twitter.com/TenMinPod/status/360870177052692480?s=20`
        },
        {
            date: new Date(`7/31/2013`),
            episode: 155,
            episodeTitle: `I Posted 45 Photos on Facebook`,
            episodeUrl: ``,
            videoUrl: `videos/Forty_Five_Fuckin_Who_Cares_Photos.mp4`,
            tweetText: `Laffin'doon'podcass...`,
            tweetUrl: `https://twitter.com/TenMinPod/status/362666542703443968?s=20`
        },
        {
            date: new Date(`8/6/2013`),
            episode: 154,
            episodeTitle: `A Guest or Whatever`,
            episodeUrl: ``,
            photoUrl: `images/Marshall_Cook_Fourth_Wheel.jpg`,
            tweetText: `Here's @CookMarshall lsitting quietly the way a good guest should while the guys talk because they don't need guests.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/364846148160204800?s=20`
        },
        {
            date: new Date(`8/8/2013`),
            episode: 155,
            episodeTitle: `I Posted 45 Photos on Facebook`,
            episodeUrl: ``,
            photoUrl: `images/Who_Cares_Photos.jpg`,
            tweetText: `Here's a screenshot of @bryancallen's tweets with links to all his fuckin who cares photos.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/365555834723377152?s=20`
        },
        {
            date: new Date(`8/20/2013`),
            episode: 158,
            episodeTitle: `Hunters, Gatherers, and Sketch Comedy`,
            episodeUrl: ``,
            photoUrl: `images/Bobby_Lee_Vape_God.jpg`,
            tweetText: `Here's @WillSasso's POV as @bobbyleelive points at him with one of those goofy Steven Dorff electronic cigarettes.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/369912101633921024?s=20`
        },
        {
            date: new Date(`9/10/2013`),
            episode: 164,
            episodeTitle: `Dear TMP Pt. 9`,
            episodeUrl: ``,
            photoUrl: `images/Wan_Geh_Bow_Jah.jpg`,
            tweetText: `Y'welc'm @MaaadProblems. W'hope y'gehn'bow'jah. W'glad w'help y'.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/377637644186185728?s=20`
        },
        {
            date: new Date(`9/12/2013`),
            episode: 165,
            episodeTitle: `Dear TMP Pt. 10`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Refuses_To_Put_On_Shirt.jpg`,
            tweetText: `Here's @chrisdelia refusing to put his shirt on at the beginning of today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/378240152780279808?s=20`
        },
        {
            date: new Date(`9/19/2013`),
            episode: 167,
            episodeTitle: `It's Salad Time`,
            episodeUrl: ``,
            photoUrl: `images/Will_Salad.jpg`,
            tweetText: `Wooooo! Here's @WillSasso's salad from today's episode! Look how happy @bryancallen and @chrisdelia are! Wooohooooo!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/380789243238293504?s=20`
        },
        {
            date: new Date(`10/4/2013`),
            episode: 171,
            episodeTitle: `Live in Cleveland`,
            episodeUrl: ``,
            photoUrl: `images/Cleveland_Bo_Job.jpg`,
            tweetText: `Thanks to @Grande_Ben7 for this travel poster inspired by today's ep. No offense to Clevelanders but s'fer bow'jahs.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/385995103564623872?s=20`
        },
        {
            date: new Date(`10/10/2013`),
            episode: 173,
            episodeTitle: `What If`,
            episodeUrl: ``,
            photoUrl: `images/Intensifying_Smile.jpg`,
            tweetText: `Here's the gradually intensifying clown smile @chrisdelia was talking about on today's episode`,
            tweetUrl: `https://twitter.com/TenMinPod/status/388437493873274880?s=20`
        },
        {
            date: new Date(`10/24/2013`),
            episode: 177,
            episodeTitle: `Someone Was Late`,
            episodeUrl: ``,
            photoUrl: `images/Traffic_Selfie.jpg`,
            tweetText: `Here's the traffic selfie @bryancallen referenced on today's podcast even though/because he wasn't there to record.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/393554617050480640?s=20`
        },
        {
            date: new Date(`10/29/2013`),
            episode: 178,
            episodeTitle: `How's Your New Dude`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Refuses_To_Look_At_Chris.jpg`,
            tweetText: `Here's @bryancallen REFUSING to look at @chrisdelia while recording today's episode`,
            tweetUrl: `https://twitter.com/TenMinPod/status/395281404868562944?s=20`
        },
        {
            date: new Date(`11/5/2013`),
            episode: 180,
            episodeTitle: `Will's Adorable Italian Mother`,
            episodeUrl: ``,
            photoUrl: `images/Broadcasting_Mom.jpg`,
            tweetText: `Here's @WillSasso's Mom doing some "broadcasting". #chachacha`,
            tweetUrl: `https://twitter.com/TenMinPod/status/397858101358886912?s=20`
        },
        {
            date: new Date(`11/5/2013`),
            episode: 180,
            episodeTitle: `Will's Adorable Italian Mother`,
            episodeUrl: ``,
            videoUrl: `videos/Thanks_For_Listening_To_Broadcast.mp4`,
            tweetText: `A Special Message from Will's Adorable Italian Mother`,
            tweetUrl: `https://twitter.com/TenMinPod/status/397954250632097792?s=20`
        },
        {
            date: new Date(`11/19/2013`),
            episode: 184,
            episodeTitle: `Bit Killer Jones Strikes Again`,
            episodeUrl: ``,
            photoUrl: `images/Gladiator_Helmet_Bit_Killed.jpg`,
            tweetText: `Here's @WillSasso in the gladiator helmet @bryancallen referenced when he bit killed today's entire podcast. #BKJ`,
            tweetUrl: `https://twitter.com/TenMinPod/status/402982545790218240?s=20`
        },
        {
            date: new Date(`11/21/2013`),
            episode: 185,
            episodeTitle: `If We Were Women`,
            episodeUrl: ``,
            photoUrl: `images/Ten_Minute_Females.jpg`,
            tweetText: `Thanks @epicdaddy25 for this intoxicatingly sexy female version of our avatar, inspired by today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/403703172398456832?s=20`
        },
        {
            date: new Date(`1/7/2014`),
            episode: 198,
            episodeTitle: `Let's Be Roomies`,
            episodeUrl: ``,
            photoUrl: `images/Ten_Minute_Threes_Company.jpg`,
            tweetText: `Thanks @Manuccas for this unsettling image of @WillSasso @chrisdelia and @bryancallen inspired by today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/420692725281734657?s=20`
        },
        {
            date: new Date(`1/30/2014`),
            episode: 205,
            episodeTitle: `Super Topical Grammy Recap Show`,
            episodeUrl: ``,
            photoUrl: `images/Ten_Minute_Cult.jpg`,
            tweetText: `Thanks @Manuccas for this weird image of @WillSasso @chrisdelia and @bryancallen sorta inspired by today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/429045353275342849?s=20`
        },
        {
            date: new Date(`2/4/2014`),
            episode: 206,
            episodeTitle: `Bryan's Stupid New Phone`,
            episodeUrl: ``,
            photoUrl: `images/Galaxy_S_4.jpg`,
            tweetText: `Here's @bryancallen's stupid new phone which is dead because he doesn't even have a charger for the stupid thing.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/430752288211079169?s=20`
        },
        {
            date: new Date(`2/4/2014`),
            episode: 206,
            episodeTitle: `Bryan's Stupid New Phone`,
            episodeUrl: ``,
            photoUrl: `images/Galaxy_S_4_Memes.jpg`,
            tweetText: `Thanks @joevasion @DaliDimovski and @Extremevertigo for these! We have the most hilarious listeners! #wppreciatecha`,
            tweetUrl: `https://twitter.com/TenMinPod/status/430863065291042817?s=20`
        },
        //Shawna comedy albums: https://twitter.com/TenMinPod/status/438858139148902400?s=20, https://twitter.com/TenMinPod/status/439266017273843713?s=20
        {
            date: new Date(`3/4/2014`),
            episode: 214,
            episodeTitle: `Wolves`,
            episodeUrl: ``,
            photoUrl: `images/Escape_From_LA.jpg`,
            tweetText: `Thanks @NickLeadlay for this movie poster based on today's podcast. @WillSasso looks really cool in an eyepatch.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/440977806214709248?s=20`
        },
        {
            date: new Date(`3/6/2014`),
            episode: 210,
            episodeTitle: `Verify Bry`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Callen_Verified.jpg`,
            tweetText: `Congrats @bryancallen on finally being verified! You owe it all to our listeners! WE DID IT, EVERYBODY!! #VERIFYBRY`,
            tweetUrl: `https://twitter.com/TenMinPod/status/441786777380982784?s=20`
        },
        {
            date: new Date(`3/11/2014`),
            episode: 216,
            episodeTitle: `Fun One`,
            episodeUrl: ``,
            videoUrl: `videos/Wheres_Bryan.mp4`,
            tweetText: `Waiting for Bryan...`,
            tweetUrl: `https://twitter.com/TenMinPod/status/443526616044822529?s=20`
        },
        {
            date: new Date(`3/13/2014`),
            episode: 217,
            episodeTitle: `Cool Movie Scenes`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Nature_Box.jpg`,
            tweetText: `Here's @bryancallen enjoying tasty @naturebox snacks. Hope you enjoyed the bonus chewing that followed today's show.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/444201776565063680?s=20`
        },
        {
            date: new Date(`3/18/2014`),
            episode: 218,
            episodeTitle: `More Current Eventin' It`,
            episodeUrl: ``,
            photoUrl: `images/Current_Eventin_It.jpg`,
            tweetText: `Agreed @DaliDimovski today's Current Eventin' It was hard hitting. News pundit @chrisdelia tackles hot button issues.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/446106242268684288?s=20`
        },
        {
            date: new Date(`4/15/2014`),
            episode: 226,
            episodeTitle: `Chris Hates Coachella`,
            episodeUrl: ``,
            photoUrl: `images/Coachella_Boa_Constrictors.jpg`,
            tweetText: `Our listeners are the best! Thanks @mycardiganquote for this hilarious newspaper mockup about boas at Coachella! HA!!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/456252586346029056?s=20`
        },
        {
            date: new Date(`4/22/2014`),
            episode: 228,
            episodeTitle: `Use the Thread`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Use_The_Thread.jpg`,
            tweetText: `Thank you @ArronDennis and Obi-Wan Kenobi for urging @bryancallen to use the thread. #usethethread`,
            tweetUrl: `https://twitter.com/TenMinPod/status/458734250871635968?s=20`
        },
        {
            date: new Date(`4/24/2014`),
            episode: 229,
            episodeTitle: `Two Johanns and Zero Shoes`,
            episodeUrl: ``,
            photoUrl: `images/Will_Barefoot_Shoes.jpg`,
            tweetText: `Here's the barefoot shoe pic @WillSasso sent to @chrisdelia JUST to piss him off. Oh and look, there's his bike too.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/459434009710166017?s=20`
        },
        {
            date: new Date(`4/25/2014`),
            episode: 229,
            episodeTitle: `Two Johanns and Zero Shoes`,
            episodeUrl: ``,
            photoUrl: `images/Fuck_No_Barefoot_Shoes.jpg`,
            tweetText: `Thanks @Jake_Jenssen for this fun doodle of @WillSasso's "shoes" that angered @chrisdelia and @bryancallen. #andanger`,
            tweetUrl: `https://twitter.com/TenMinPod/status/459434009710166017?s=20`
        },
        //It's cool... https://twitter.com/TenMinPod/status/461717098755268609?s=20
        {
            date: new Date(`5/6/2014`),
            episode: 232,
            episodeTitle: `Willbot 10000`,
            episodeUrl: ``,
            photoUrl: `images/Willbot_10000_Drawing.jpg`,
            tweetText: `Thanks @mrchickenpotpie for this rendering of #Willbot10000! W'ppreciatecha! #HelloBreeann #BreeannCallen #Breeann`,
            tweetUrl: `https://twitter.com/TenMinPod/status/463862641140588544?s=20`
        },
        {
            date: new Date(`5/9/2014`),
            episode: 233,
            episodeTitle: `Bryan Callen Theme Song`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Callen_Theme_Song.jpg`,
            tweetText: `Thanks @danWorthington for transcribing @bryancallen's version of the Bryan Callen Theme Song (w/ @WillSasso bugle).`,
            tweetUrl: `https://twitter.com/TenMinPod/status/464858925766959104?s=20`
        },
        {
            date: new Date(`5/13/2014`),
            episode: 234,
            episodeTitle: `Andrew Jackson Hair`,
            episodeUrl: ``,
            photoUrl: `images/Andrew_Jackson_Hair.jpg`,
            tweetText: `Here's @davidsullivan9 running his fingers through his #AndrewJacksonHair and @bryancallen shirtless for no reason.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/466324797610549248?s=20`
        },
        {
            date: new Date(`5/14/2014`),
            episode: 234,
            episodeTitle: `Andrew Jackson Hair`,
            episodeUrl: ``,
            photoUrl: `images/Ten_Minute_Andrew_Jackson.jpg`,
            tweetText: `Thanks @Mnot_Scute for again updating our tenminutepodcast.com banner. Andrew Jackson needs more Patch Adams tho.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/466671757978378240?s=20`
        },
        {
            date: new Date(`5/15/2014`),
            episode: 235,
            episodeTitle: `Kevin D'Elia`,
            episodeUrl: ``,
            photoUrl: `images/Kevin_Delia.jpg`,
            tweetText: `Hey @BrianKent69 w'ppreciatecha for this vividly accurate sketch of Kevin D'Elia. His dad and uncles love him s'much.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/467044983912951809?s=20`
        },
        {
            date: new Date(`5/19/2014`),
            episode: 234,
            episodeTitle: `Andrew Jackson Hair`,
            episodeUrl: ``,
            photoUrl: `images/Ten_Minute_Patch_Adams.jpg`,
            tweetText: `Thanks @andrew_dyce for adding some Patch Adams to the Andrew Jackson on thsi updated tenminutepodcast.com banner.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/466671757978378240?s=20`
        },
        //Obsession with bees? https://twitter.com/TenMinPod/status/469325226329649152?s=20
        //Congratulations on your bad ideas? https://twitter.com/TenMinPod/status/469633660203716610?s=20
        {
            date: new Date(`5/28/2014`),
            episode: 206,
            episodeTitle: `Bryan's Stupid New Phone`,
            episodeUrl: ``,
            photoUrl: `images/How_Do_You_Listen_To_Podcasts.jpg`,
            tweetText: `Thanks @mixn for adding Bryan's VHS tape "phone" to our listener survey. Helpful. podsurvey.com/tenminute #megapickles`,
            tweetUrl: `https://twitter.com/TenMinPod/status/471758321225969664?s=20`
        },
        {
            date: new Date(`6/5/2014`),
            episode: 241,
            episodeTitle: `Bryan's Shitty Contest`,
            episodeUrl: ``,
            photoUrl: `images/Bryans_Shitty_Contest.jpg`,
            tweetText: `Hey @BrianKent69 w'ppreciatecha for this sketch of exactly what @bryancallen thinks his shitty contest would entail.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/474702082562220032?s=20`
        },
        //Dolphin with a handgun? https://twitter.com/TenMinPod/status/476096491929346049?s=20
        {
            date: new Date(`6/13/2014`),
            episode: 55,
            episodeTitle: `Dolphin With a Handgun`,
            episodeUrl: ``,
            photoUrl: `images/Dolphin_With_A_Handgun_Stills.jpg`,
            tweetText: `WATCH @StingingFoam's DOLPHIN WITH A HANDGUN: youtu.be/wkPNE94s-Uk AND LOOK AT THESE STILLS FROM THAT THING ALSO:`,
            tweetUrl: `https://twitter.com/TenMinPod/status/477550263578804225?s=20`
        },
        {
            date: new Date(`6/26/2014`),
            episode: 247,
            episodeTitle: `Slow Chewin' and Pillow Turnin'`,
            episodeUrl: ``,
            photoUrl: `images/Stork_And_Muscles.jpg`,
            tweetText: `If you haven't seen this youtu.be/wkPNE94s-Uk yet, watch it. And here are @StingingFoam's stork/muscle redesigns.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/482233560997171200?s=20`
        },
        {
            date: new Date(`7/2/2014`),
            episode: 248,
            episodeTitle: `Heart And Eyes`,
            episodeUrl: ``,
            photoUrl: `images/Heart_And_Eyes_Track_List.jpg`,
            tweetText: `Thanks @mrchickenpotpie for this brilliant "Heart and Eyes" cover art and track list. #heartandeyes #beatandsee`,
            tweetUrl: `https://twitter.com/TenMinPod/status/482233560997171200?s=20`
        },
        //Slow farts? https://twitter.com/TenMinPod/status/487447736271122433?s=20, https://twitter.com/TenMinPod/status/487457642877448192?s=20
        //Fart compilation? https://twitter.com/TenMinPod/status/487804591233171457?s=20
        //Gamefly compilation? https://twitter.com/TenMinPod/status/489454713331396609?s=20
        {
            date: new Date(`7/18/2014`),
            episode: 252,
            episodeTitle: `DADADA BABABOO`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Ba_Ba_Boo.jpg`,
            tweetText: `Thanks @JustinPruden for helping display that @bryancallen says #BABABOO when @WillSasso or anyone else says #DADADA.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/490245854087761920?s=20`
        },
        //Bryan pooping? https://twitter.com/TenMinPod/status/491751405942607872?s=20
        {
            date: new Date(`7/29/2014`),
            episode: 256,
            episodeTitle: `Bryan, Go For It`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Baby_Birding.jpg`,
            tweetText: `Here's @chrisdelia "baby birding" @bryancallen for some Chipotle.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/494166261996482561?s=20`
        },
        //Shuffler's physique https://twitter.com/TenMinPod/status/497881798961922048?s=20
        {
            date: new Date(`8/27/2014`),
            episode: 264,
            episodeTitle: `Beyond the Stop`,
            episodeUrl: ``,
            photoUrl: `images/Beyond_The_Stop.jpg`,
            tweetText: `Thanks @WrimRimbaug for turning the tenminutepodcast.com banner into a brand-specific "Beyond the Stop" book cover!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/504689880920621057?s=20`
        },
        {
            date: new Date(`9/2/2014`),
            episode: 266,
            episodeTitle: `Chris's Conundrum`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Went_Missing.jpg`,
            tweetText: `Thanks @ArronDennis for helping to find @chrisdelia who went missing but isn't missing and may have shit on his face.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/507024234124955648?s=20`
        },
        //Not Jujitsu? https://twitter.com/TenMinPod/status/509528073302454272?s=20
        //Mustard sandwiches? https://twitter.com/TenMinPod/status/510228232054919168?s=20
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Bryans_Replacements_5.jpg`,
            tweetText: `Thanks @amonkeyonacid for these perfectly executed versions of our website banner as described on today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/511957493426057216?s=20`
        },
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Wills_Replacements_4.jpg`,
            tweetText: `Thanks @amonkeyonacid for these perfectly executed versions of our website banner as described on today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/511957493426057216?s=20`
        },
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Replacements_2.jpg`,
            tweetText: `Thanks @amonkeyonacid for these perfectly executed versions of our website banner as described on today's podcast.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/511957493426057216?s=20`
        },
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Bryans_Replacements_2.jpg`,
            tweetText: `Thanks also to @AverageGus @Systemik_ @Chrishowrad and @Marty20k for their weird as shit replacement photoshops.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512038301578952704?s=20`
        },
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Bryans_Replacements.jpg`,
            tweetText: `Thanks also to @AverageGus @Systemik_ @Chrishowrad and @Marty20k for their weird as shit replacement photoshops.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512038301578952704?s=20`
        },
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Wills_Replacements.jpg`,
            tweetText: `Thanks also to @AverageGus @Systemik_ @Chrishowrad and @Marty20k for their weird as shit replacement photoshops.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512038301578952704?s=20`
        },
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Replacement_Podcast.jpg`,
            tweetText: `Thanks also to @AverageGus @Systemik_ @Chrishowrad and @Marty20k for their weird as shit replacement photoshops.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512038301578952704?s=20`
        },
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Replacements_3.jpg`,
            tweetText: `Thanks @DaliDimovski for your photoshops. The "Bill & Ted's" version should be a real movie (cc: @rickspringfield).`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512077861683875841?s=20`
        },
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Wills_Replacements_2.jpg`,
            tweetText: `Thanks @DaliDimovski for your photoshops. The "Bill & Ted's" version should be a real movie (cc: @rickspringfield).`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512077861683875841?s=20`
        },
        {
            date: new Date(`9/16/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Bryans_Replacements_3.jpg`,
            tweetText: `Thanks @DaliDimovski for your photoshops. The "Bill & Ted's" version should be a real movie (cc: @rickspringfield).`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512077861683875841?s=20`
        },
        {
            date: new Date(`9/17/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Bryans_Replacements_4.jpg`,
            tweetText: `And many more thanks to @mrchickenpotpie and @itdunmatta for your banner photoshops. W'ppreciatecha! #wppreciatecha`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512274140695248896?s=20`
        },
        {
            date: new Date(`9/17/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Replacements.jpg`,
            tweetText: `And many more thanks to @mrchickenpotpie and @itdunmatta for your banner photoshops. W'ppreciatecha! #wppreciatecha`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512274140695248896?s=20`
        },
        {
            date: new Date(`9/17/2014`),
            episode: 270,
            episodeTitle: `Replacements`,
            episodeUrl: ``,
            photoUrl: `images/Wills_Replacements_3.jpg`,
            tweetText: `And many more thanks to @mrchickenpotpie and @itdunmatta for your banner photoshops. W'ppreciatecha! #wppreciatecha`,
            tweetUrl: `https://twitter.com/TenMinPod/status/512274140695248896?s=20`
        },
        {
            date: new Date(`9/25/2014`),
            episode: 273,
            episodeTitle: `Bullet Points`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Comedy_T1000.jpg`,
            tweetText: `Here's @bryancallen at which point he decided to wear sunglasses in today's podcast because he's "The Comedy T-1000."`,
            tweetUrl: `https://twitter.com/TenMinPod/status/515210750860591104?s=20`
        },
        {
            date: new Date(`9/25/2014`),
            episode: 273,
            episodeTitle: `Bullet Points`,
            episodeUrl: ``,
            photoUrl: `images/Comedy_T1000_Website.jpg`,
            tweetText: `Thanks @jakelogann for this "screenshot" of @bryancallen's website bryancallenthecomedyt-1000.com! Check out those events!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/515225055706349568?s=20`
        },
        {
            date: new Date(`9/30/2014`),
            episode: 274,
            episodeTitle: `Brunch with the Guys`,
            episodeUrl: ``,
            videoUrl: `videos/This_Is_Beautiful_Cheese.mp4`,
            tweetText: `In lieu of another shirtless @bryancallen photo as referred to on today's podcast, please look at this instead.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/517029130173308929?s=20`
        },
        //Welcome? https://twitter.com/TenMinPod/status/521862589241106432?s=20
        {
            date: new Date(`10/20/2014`),
            episode: 279,
            episodeTitle: `Hit Based`,
            episodeUrl: ``,
            photoUrl: `images/Hit_Based_Definition.jpg`,
            tweetText: `Thanks @TheMatterhorn9 for letting us know that "Hit Based" is on @urbandictionary even though that's so hit based.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/524404809957253120?s=20`
        },
        {
            date: new Date(`10/21/2014`),
            episode: 280,
            episodeTitle: `Let's Shave Your Head`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Callen_Wolves_Bro.jpg`,
            tweetText: `Thanks @Damonmaydesign @daledeforest @solppy_papi @catoalsen for all this bizarre shit.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/524640859359563776?s=20`
        },
        {
            date: new Date(`10/21/2014`),
            episode: 280,
            episodeTitle: `Let's Shave Your Head`,
            episodeUrl: ``,
            photoUrl: `images/Sinaid_Feat_Bryan_Callen.jpg`,
            tweetText: `Thanks @Damonmaydesign @daledeforest @solppy_papi @catoalsen for all this bizarre shit.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/524640859359563776?s=20`
        },
        {
            date: new Date(`10/21/2014`),
            episode: 280,
            episodeTitle: `Let's Shave Your Head`,
            episodeUrl: ``,
            photoUrl: `images/Sinead_In_Las_Vegas.jpg`,
            tweetText: `Thanks @Damonmaydesign @daledeforest @solppy_papi @catoalsen for all this bizarre shit.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/524640859359563776?s=20`
        },
        {
            date: new Date(`10/21/2014`),
            episode: 280,
            episodeTitle: `Let's Shave Your Head`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Sleeping_With_Nicholas_Cage.jpg`,
            tweetText: `Thanks @Damonmaydesign @daledeforest @solppy_papi @catoalsen for all this bizarre shit.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/524640859359563776?s=20`
        },
        {
            date: new Date(`10/21/2014`),
            episode: 280,
            episodeTitle: `Let's Shave Your Head`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Callen_But_A_Man_Though.jpg`,
            tweetText: `Hahaha! @PlumDunker's take on today's podcast gets an A+!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/524682767821717505?s=20`
        },
        {
            date: new Date(`10/22/2014`),
            episode: 280,
            episodeTitle: `Let's Shave Your Head`,
            episodeUrl: ``,
            photoUrl: `images/Leaving_Las_Vegas.jpg`,
            tweetText: `Our listeners are the best! @NickLeadlay this is hilarous! BKJ'S THUMBS!! HAAA!!`,
            tweetUrl: `https://twitter.com/TenMinPod/status/525079247229300737?s=20`
        },
        {
            date: new Date(`11/4/2014`),
            episode: 285,
            episodeTitle: `Setting Parameters`,
            episodeUrl: ``,
            videoUrl: `videos/Producer_Logan_Bryans_Late.mp4`,
            tweetText: `It's (always) great to see our producer, Logan. Also, Bryan is (always) late.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/529813512676454401?s=20`
        },
        //TODO: Is this one actually about the episode?
        {
            date: new Date(`11/8/2014`),
            episode: 285,
            episodeTitle: `Setting Parameters`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Is_Close.jpg`,
            tweetText: `Thanks @Alex_Muns for diagramming how close @bryancallen was to @chrisdelia and @WillSasso as discussed on TMP LIVE.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/531191017496535040?s=20`
        },
        {
            date: new Date(`11/11/2014`),
            episode: 286,
            episodeTitle: `Phones`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Phones.jpg`,
            tweetText: `Yes @CNewmannMMA. Phones.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/532373227700383744?s=20`
        },
        {
            date: new Date(`12/1/2014`),
            episode: 295,
            episodeTitle: `Most TMP TMP Ever`,
            episodeUrl: ``,
            videoUrl: `videos/Mustache_Fart.mp4`,
            tweetText: `BKJ's latest attempt to fart into the mic is thwarted by his own stupid jeans.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/539637480904220672?s=20`
        },
        {
            date: new Date(`12/4/2014`),
            episode: 293,
            episodeTitle: `Brbr`,
            episodeUrl: ``,
            photoUrl: `images/Bryan_Selfish_All_Finger_Pointing.jpg`,
            tweetText: `Here's @bryancallen selfishly all-finger pointing at himself before @chrisdelia and @WillSasso explain brbr to him.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/540594170935533569?s=20`
        },
        {
            date: new Date(`12/11/2014`),
            episode: 295,
            episodeTitle: `Most TMP TMP Ever`,
            episodeUrl: ``,
            photoUrl: `images/Mustache_Jeans.jpg`,
            tweetText: `#perfectlycleannikeshoes #yougivemethefingeragainillbreakitoffandstickitupyourass #1920scarnivalstrongmanjeans`,
            tweetUrl: `https://twitter.com/TenMinPod/status/543146238552449024?s=20`
        },
        //Bryan killed Will and Chris christmas card? https://twitter.com/TenMinPod/status/546438287930310656?s=20
        {
            date: new Date(`12/23/2014`),
            episode: 298,
            episodeTitle: `Christmas with Will's Adorable Italian Mother`,
            episodeUrl: ``,
            photoUrl: `images/Religious_Freedom.jpg`,
            tweetText: `Thanks @CroweYo for this loving tribute to Will's Mom and her belief in family togetherness and religious autonomy.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/547548754614550528?s=20`
        },
        {
            date: new Date(`12/30/2014`),
            episode: 300,
            episodeTitle: `300th Episode`,
            episodeUrl: ``,
            photoUrl: `images/On_My_2016_Shit.jpg`,
            tweetText: `Thanks @justnic413 but don't encourage @chrisdelia to fuck with linear time. @WillSasso and @bryancallen hate that.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/550076717113810945?s=20`
        },
        {
            date: new Date(`1/6/2015`),
            episode: 302,
            episodeTitle: `Take It Back`,
            episodeUrl: ``,
            photoUrl: `images/Safe_Environment_For_Will.jpg`,
            tweetText: `Here are @bryancallen and @chrisdelia creating a safe environment for @WillSasso to fire off that take it back.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/552522571477159936?s=20`
        },
        {
            date: new Date(`1/6/2015`),
            episode: 302,
            episodeTitle: `Take It Back`,
            episodeUrl: ``,
            photoUrl: `images/Stand_Up_Is_A_Dead_Art.jpg`,
            tweetText: `Thanks @Grec530 for your summary of today's episode. #MandyPatinkin`,
            tweetUrl: `https://twitter.com/TenMinPod/status/552543023108591616?s=20`
        },
        {
            date: new Date(`1/13/2015`),
            episode: 304,
            episodeTitle: `Give Us $2,000,000`,
            episodeUrl: ``,
            photoUrl: `images/Chris_Making_The_Face_Will_Made.jpg`,
            tweetText: `Here's @chrisdelia making the face @WillSasso spoke of on today's show, while @bryancallen and @CookMarshall look on.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/555043371169742848?s=20`
        },
        {
            date: new Date(`1/13/2015`),
            episode: 304,
            episodeTitle: `Give Us $2,000,000`,
            episodeUrl: ``,
            photoUrl: `images/Thats_Racist.jpg`,
            tweetText: `Thanks for this @Nicklocono.`,
            tweetUrl: `https://twitter.com/TenMinPod/status/555087967685836800?s=20`
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
        {
            date: new Date(``),
            episode: 0,
            episodeTitle: ``,
            episodeUrl: ``,
            photoUrl: ``,
            tweetText: ``,
            tweetUrl: ``
        },
    ])
}