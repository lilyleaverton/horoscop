
sign = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius" ] ;
horoscope = [
    "Your exuberance and self-confidence will become the talk of the day for those around you. But it's not for nothing that you will attract so much attention. You will derive pleasure in accomplishing herculean tasks today, and Ganesha says you will do justice to work too. At home, everything will go smooth and you will enjoy and share the peace in your life. On the whole, you will have a cheerful day ahead.",
    "You are an excellent team player and your performance reaches a new high when you are a part of a group. Be an active member of your group, express your opinions, share your knowledge and see how your team becomes the winning team, says Ganesha. Wind up your day by hanging out with friends and family.",
    "Your inherent dynamism and energy will sparkle forth today. Freelancers will be struck with inspiration, and will conjure masterpieces. Pleasant surprises await you in the evening, says Ganesha.",
    "Ganesha advises you to look before you leap. One hasty decision may undo a lot of hard work accomplished over a long period of time. After a tense morning, you may simply want an evening with kids, helping them grow the Dahlias.",
    "You are very sensitive, and some people will disturb your peace of mind today. However, getting irritated will only make matters worse. Reflect in isolation what may be at the root of the problem. Ganesha says it is closer to you than you think.",
    "You will be in an extremely emotional and romantic mood today. You may be worried about your personal relations, health, diet, career etc. You need to guard against giving into excessive stress and worry and look after your health, says Ganesha.",
    "The day is very favourable, says Ganesha. You will feel a sense of joy and happiness with your valuable possessions. You may fall into love or have a strong romantic ties with someone. A great time for lovers. Ganesha foresees chance of having new contacts and ties.",
    "You will try to finish your tasks as per schedule and will also be able to earn well. You will benefit from the influence of high ranking officials. They will appreciate your dedication. A promotion may come your way. You will reap the rewards of your hard work, says Ganesha.",
    "Stay clear of a coalition when it comes to business ventures, warns Ganesha. Alone, you can manage an entire stampede. By your own you are, by far, the best administrator of your department. Today, find yourself being the general and uniting people under your banner to achieve greater success, says Ganesha.",
    "Ganesha says beware of overspending today. Those of you having close ties abroad may find them beneficial. Ganesha says you should always remain optimistic.",
    "“It's a dream come true,” you may utter these words in surprise today, feels Ganesha. Your palatial home is ready or you may just get the keys of your much desired vehicle. You may have an extended celebration by receiving or giving gifts to your closed ones. However, make sure you do not make a hole in your pocket.",
    "Round and round they tumble, the wheels of life, smoothly gliding into a routine. You may spend your day in discontent due to the rut of regular activities. Sadly, there is little hope or adventure Ganesha foresees that might make this day worthwhile for you. There will be glimpses of excitement in the evening but on the whole, it will be nothing to write home about.",
]

image = [
    //Capricorn
    "img/signs/capricorn.png",
    //Aquarius
    "img/signs/aquarius.png",
    //Pisces
    "img/signs/pisces.png",
    //Aries
    "img/signs/aries.png",
    //Taurus
    "img/signs/taurus.png",
    //Gemini
    "img/signs/gemini.png",
    //Cancer
    "img/signs/cancer.png",
    //Leo
    "img/signs/leo.png",
    //Virgo
    "img/signs/virgo.png",
    //Libra
    "img/signs/libra.png",
    //Scorpio
    "img/signs/scorpio.png",
    //Sagittarius
    "img/signs/sagittarius.png"
]
function button() {
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    if(realDay(month,day)==false) {
        document.getElementById('sign').innerHTML = "That's not a real day!";
        document.getElementById('horoscope').innerHTML = " " ;
        document.getElementById('img').src = " ";
    } else {
        var sign = getSign(month, day);
        var horoscope = getHoroscope(sign);
        var name = document.getElementById('username').value;
        var image = getImage(sign);
        var first = " ";
        if (name.length >= 1) {
            first = name + ", ";
        } else {
            first = "";
        }

        document.getElementById('sign').innerHTML = sign;
        document.getElementById('horoscope').innerHTML = first + horoscope;
        document.getElementById('img').src = image;
    }
}

function getSign(month,day) {

    //Capricorn
    if((month==12&&day>=22)||(month==1&&day<=20)) {
        return sign[0] ;
    }

    //Aquarius
    if((month==1&&day>=21)||(month==2&&day<=19)) {
        return sign[1] ;
    }

    //Pisces
    if((month==2&&day>=20)||(month==3&&day<=20)) {
        return sign[2] ;
    }

    //Aries
    if((month==3&&day>=21)||(month==4&&day<=19)) {
        return sign[3] ;
    }

    //Taurus
    if((month==4&&day>=20)||(month==5&&day<=20)) {
        return sign[4] ;
    }

    //Gemini
    if((month==5&&day>=21)||(month==6&&day<=21)) {
        return sign[5] ;
    }

    //Cancer
    if((month==6&&day>=22)||(month==7&&day<=23)) {
        return sign[6] ;
    }

    //Leo
    if((month==7&&day>=24)||(month==8&&day<=23)) {
        return sign[7] ;
    }

    //Virgo
    if((month==8&&day>=24)||(month==9&&day<=22)) {
        return sign[8] ;
    }

    //Libra
    if((month==9&&day>=23)||(month==10&&day<=22)) {
        return sign[9] ;
    }

    //Scorpio
    if((month==10&&day>=23)||(month==11&&day<=22)) {
        return sign[10] ;
    }

    //Sagittarius
    if((month==11&&day>=23)||(month==12&&day<=20)) {
        return sign[11] ;
    }
}

function getHoroscope(sign) {
    if(sign == "Capricorn") {
        return horoscope[0];
    }

    if(sign == "Aquarius") {
        return horoscope[1];
    }

    if(sign == "Pisces") {
        return horoscope[2];
    }

    if(sign == "Aries") {
        return horoscope[3];
    }

    if(sign == "Taurus") {
        return horoscope[4];
    }

    if(sign == "Gemini") {
        return horoscope[5];
    }

    if(sign == "Cancer") {
        return horoscope[6];
    }

    if(sign == "Leo") {
        return horoscope[7];
    }

    if(sign == "Virgo") {
        return horoscope[8];
    }

    if(sign == "Libra") {
        return horoscope[9];
    }

    if(sign == "Scorpio") {
        return horoscope[10];
    }

    if(sign == "Sagittarius") {
        return horoscope[11];
    }

}

function getImage(sign) {
    if(sign == "Capricorn") {
        return image[0];
    }
    if(sign == "Aquarius") {
        return image[1];
    }
    if(sign == "Pisces") {
        return image[2];
    }
    if(sign == "Aries") {
        return image[3];
    }
    if(sign == "Taurus") {
        return image[4];
    }
    if(sign == "Gemini") {
        return image[5];
    }
    if(sign == "Cancer") {
        return image[6];
    }
    if(sign == "Leo") {
        return image[7];
    }
    if(sign == "Virgo") {
        return image[8];
    }
    if(sign == "Libra") {
        return image[9];
    }
    if(sign == "Scorpio") {
        return image[10];
    }
    if(sign == "Sagittarius") {
        return image[11];
    }

}

function realDay(month, day) {
    if(((month==4||month==6||month==9||month==11)&&day>30)||(month==2&&day>28)) {
        return false;
    } else {
        return true;
    }

}