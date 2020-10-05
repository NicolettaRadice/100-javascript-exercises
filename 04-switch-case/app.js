function checkHoroscope() {
    var text;
    var horoscope = document.getElementById("myInput").value;

    switch (horoscope) {
        case "Pisces":
            text = "If you’re 95 percent “sure” about a certain key relationship, Pisces, why not act as if you’re at 100 percent?! Sometimes that last shred of doubt is just our own fear or resistance masquerading as “practical” concerns. What’s the best thing that could come of a commitment versus the worst? With amorous Venus in analytical Virgo and your seventh house of dynamic duos until October 27, pairing up for the long run has never been more appealing. No one on the radar? Set an intention to look with a more open mind.";
            break;

        case "Aquarius":
            text = "How deep is your love—or lust, Aquarius? You may find out this month as sensual Venus flits through earthy Virgo and your seductive eighth house until October 27. You won’t even have to try, and you’ll charm almost everyone who crosses your path. While this could be light and breezy, it’s also a way to meet more prospects and have a larger pool to draw from. Couples might get serious about taking a big step, or at least talking about it. Drop the assumptions—and ultimatums—and see what’s what.I am not a fan of orange.";
            break;

        case "Capricorn":
            text = "True romance knows no bounds—even during a pandemic! Today, amorous Venus beams into sensible Virgo and your global ninth house until October 27, opening doors to long-distance love. Granted, not all borders are open, but that’s no reason to close down your heart. Perhaps the best thing you can do for your love life is stop limiting your options, whether by geography, appearances or cultural background. There’s a reason that opposites attract. Attached? Even if you can’t get away now, planning a romantic romp will keep you stimulated!";
            break;

        case "Sagittarius":
            text = "What happens when the planet of romance marches into your future-oriented tenth house? Why, you start thinking about your “amorous endgame,” of course! Today, affectionate Venus alights into Virgo and your house of long-term planning until October 27, turning your attention to where things are going with a certain key relationship or, if there’s no such thing in your life, toward manifesting one. If you know what you want, you’re way ahead of the game! These next four weeks are ideal for playing out different scenarios in your head and, if you’re close, IRL!";
            break;

        case "Scorpio":
            text = "The line between pal and paramour may get a little blurry starting today as vixen Venus struts into your eleventh house of friendship, technology and innovation, elbowing you to think outside the romantic box for the next four weeks. If your love life has been lacking, mix things up to rekindle some embers. Attached? Throw away the playbook and get a little experimental. Single? Skip your usual dating apps and try something new in October, like working with a matchmaker or letting friends fix you up.";
            break;

        case "Libra":
            text = "Your ruling planet, quixotic Venus, kicks off her annual whirl through Virgo and your fantasy-fueled twelfth house until October 27. While you may be completely aware of the fact that you’re seeing a large swath of life through rose-colored glasses, frankly, you’d prefer to keep them on than be blinded by harsh realities. Nothing wrong with a little “romantic airbrushing,” but if you see BRIGHT red flags, Libra, promise us you’ll do a little sleuthing. Better safe than sorrowful!";
            break;

        case "Virgo":
            text = "Let the lovefest begin—and let it begin with YOU! Today, affectionate Venus spins into Virgo until October 27, reminding you that until you fill your inner emotional coffers, no one can do it for you—and you’ll be working from a deficit when it comes to giving to others. Over the coming four weeks, do little things that will make you feel better, even if no one else has a clue. And when you’re faced with an affordable option, always go for the upgrade!";
            break;

        case "Leo":
            text = "Pause for a cause, Leo! And in this case, said “cause” might be your sanity—or energy levels! You’ve been hosting the heavenly hedonist, Venus, in your sign since July 27, which has been as exhausting as it’s been fun. Now it’s time to come in for a landing and assess the “damage.” If there were a lot of birthday celebrations—as much as was possible during a pandemic—you’ll be grateful for Venus’ monthlong visit to your financial sector. Suck up whatever belt-tightening is required to get in the black!";
            break;

        case "Cancer":
            text = "Have you been keeping up with all the changes in your neighborhood, Cancer? After all, there’s a wide world outside your protective crab shell—even with restrictions still in place in many areas. Check out outdoor options, from dining and wine tasting to movies and yoga in the park. With fun-loving Venus making her annual trek through exploratory Virgo and your interactive third house, you’ll be up for some (safe) local engagement. It’s good for you soul AND your favorite independent businesses.";
            break;

        case "Gemini":
            text = "Stop dreaming about zhushing Chateau Gemini and do something about it! Today, beautifying Venus swings into detail-minded Virgo and your fourth house of domestic bliss until October 27, which can fill your mind with visions of an updated kitchen or streamlined bedroom. Even better news? You don’t have to break the bank to make some dramatic changes. Spend some time on Pinterest and home blogs to get ideas for simple yet significant things that you can do over the weekend.";
            break;

        case "Taurus":
            text = "Today kicks off your annual catwalk through life as your galactic guardian, charm magnet Venus, cruises through earthy Virgo and your amorous fifth house until October 27. This is a month of enhanced sensuality, creativity and head-turning abilities, and regardless of your relationship status, it will enhance the sweetness in your life. Couples can play together more, even being a little daring in your interactions. Single? No need to crush from a “safe” distance. Let your feelings be known!";
            break;

        case "Aries":
            text = "Get your glow on! Today, the cosmic aesthete, Venus, hangs a shingle in your sixth house of healthy living and self-care until October 27. This is your annual nudge to up your game—but NOT in typical Aries style (impulsively instead of planned out and gradual)! Set a few personal priorities without fixating on benchmarks like an “ideal weight.” Think about how you’d like to FEEL rather than look. What can you immediately cut out of your diet without feeling deprived? Then, squeeze in some daily movement and wait till the motivation kicks in.";
            break;

    }
    document.getElementById("demo").innerHTML = text;
}