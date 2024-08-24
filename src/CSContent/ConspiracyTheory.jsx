import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function ConspiracyTheory() {

  return (
    <>
      <title>Conspiracy Theories</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Date: 19-Oct-2023</div>
          <div class='title'>Conspiracy Theories</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>

            <p className='essaySubtitle'>Recommendation Algorithms</p>
            <p className='essayContent'>Recommendation algorithms are used everywhere, and are especially prevalent on social media platforms. The intentions of thse algorithms is to figure out the likes and disklikes of the user in order to give them as much of a pleasant and personalized experience as possible. 
              There are two types of recommendation algorithms that are used: Collaborative filtering and Content filtering.</p>
            <p className='essayContent'>Collaborative filtering recommends items based on similar user preferences. It utilizes past behavior of groups of users, such as searching up a specific on Amazon or watching a video on Youtube, in order to predict products the user might like. 
              For example, if two different users, named A and B, both watch a Youtube video that is about gardening, and then A watches another video related to gardening, this video will end up being recommended to B. 
              While its main benefit is that it requires no user or item information and become more accurate as more people interact, the disadvantage is that this algorithm cannot work properly if the user is new or makes very few interactions, resulting in inaccurate preferences for the user.</p>
            <p className='essayContent'>Content filtering focuses less on soley using user interaction, and instead relies on preferences the user gives to the alghorithm and the features of items users interact with.
              This algorithm fixes the disadvantage of lack of user interaction from collaborative filtering, since users can now describe what they prefer. This method will attempt to offer you items based on how similar it is to previous items users have interacted with.
              For example, if a person on a social media platform likes to watch cute animal vidoes, and there is a video with cute animals, then that video will be recommended to that person.</p>

            <br />

            <p className='essaySubtitle'>Feedback Loop</p>
            <p className='essayContent'>A feedback loop is when an algorithm uses the output and puts it into the input, to get another output, which will then continue to put in the input. There are two types of feedback loops: positive and negative.
              Positive feedback loops repeat actions that have worked before, such as constantly recommending them classical music because they keep listening to it. While this may work at first, lack of checks will eventually filter out all other genres of music and will only recommend classical music.
              If this was used on a more serious topic such as politics, this could create a dangerous and extreme bias. Negative feedback loops fixes this problem by being capable of regulating themselves by staying within specific conditions, though trading this regulation for its accuracy.
              An example of a negative feedback loop would be regulating body temperature; if the temperature is too high, the body will actively attempt to cool it down to optimal temperatures, and vice versa.</p>

            <br />

            <p className='essaySubtitle'>Conspiracy Theories and Algorithmic Amplification</p>
            <p className='essayContent'>Social media has become a hotbed of conspiracy theories, and this spread of misinformation is only going to get more and more difficult to detect and disprove. They are able to diffuse extremely quickly thanks to algorithms and the high engagment they usually gather, and the algorithm can also be easily weaponized to spread controversial or false info. 
              Conspiracy theories often lead to divisions and violence in society.. A way to combat this massive mess is to put some sort of limitations or filter on misinformation.</p>

            <br />

            <p className='essaySubtitle'>Platform Incentives</p>
            <p className='essayContent'>All social media platforms have some form of incentive to keep users engaged. Whether it is ads, likes, clicks, or watch time, these are intended to maintain user retention. The longer the user keeps using the app, the more tempted they are to purchase an item on Amazon, or will eventually see an ad on Youtube, which will generate revenue for the platform. 
              However, as mentioned before, controversial topics tend to have high engagement, meaning this harmful content will be more likely shown to more people. If nothing is done to fix this, it will eventually create echo chambers where people are only shown the content they want to believe, regardless if it is true or not. 
              Since it is difficult for algorithms to detect and intercept malicious content, it is up to people to prevent the spread of conspiracies with moderation systems and balancing.</p>

            <br />

            <p className='essaySubtitle'>Potential for Exploitation</p>
            <p className='essayContent'>Recommendation algorithms can be very easily exploited if people understand how it works. This can be done by using provocative wording, exaggatering a topic, or having clickbait images. These tactics are used to obtain a large amount of user interaction, and since the algorithm sees that this is trending, will expose this to more people. 
              Some algorithms assist the production these conspiracy theories, such as TikTok, since quite literally anything that is slightly controversial will get tens of thousands, if not millions of views, with more people realizing how easily it can be to abuse the algorithm for fame, it just adds tons of more fuel to the dumpster fire of misinformation, making it extremely difficult to tell real information from fake.</p>

           <hr className='m-8 border-2 rounded-full'/>

            <p className='mb-8'>Works Cited:</p>
            <p className='journalResponses'>https://www.nvidia.com/en-us/glossary/data-science/recommendation-system/</p>
            <p className='journalResponses'>https://www.techtarget.com/searchitchannel/definition/feedback-loop</p>
            <p className='journalResponses'>https://www.cjr.org/the_media_today/what-should-we-do-about-the-algorithmic-amplification-of-disinformation.php</p>

          </div>
        </div>
      </div>
    </>
  );
}