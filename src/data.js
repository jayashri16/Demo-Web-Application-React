import Img from "./assests/pexels-photo-5088180.webp";
import jsxImg from"./assests/istockphoto-1418315316-170667a.webp";
import propsImg from "./assests/pexels-caio-46274.jpg";
export const CORE_CONCEPTS = [
    {
      Image: Img,
      title: 'READ',
      description:
      "Reading opens doors to infinite worlds, inviting the mind to explore, dream, and learn beyond the boundaries of reality."
    },
    
    {
      Image: propsImg,
      title: 'LEARN',
      description:
      "To truly understand a subject, one must immerse oneself in its intricacies and complexities, embracing both its challenges and its rewards."    },
      {
        Image: jsxImg,
        title: 'PRATICE',
        description:
        "Consistent practice is the key to mastering any skill, as each repetition brings us closer to proficiency and excellence."
      },
  ];

  
  export const EXAMPLES = {
    QUESTION: {
      title: 'QUESTION',
      description:   
"In a Q&A session, it's essential to ask insightful questions that provoke thoughtful responses, fostering a deeper understanding of the topic at hand.",
      code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    REVIEWS: {
      title: ' REVIEWS',
      description:
        "Reviews offer invaluable insights, reflecting the experiences and opinions of users, guiding others in making informed decisions about products, services, or experiences.",
      code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    NOTES: {
      title: ' NOTES',
      description:
        'Notes serve as personalized reminders, capturing fleeting thoughts or important information, providing a reference point for future reflection and action.',
      code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    function handleClick() {
        setIsVisible(true);
      }
    
      return (
        <div>
          <button onClick={handleClick}>Show Details</button>
          {isVisible && <p>Amazing details!</p>}
        </div>
      );
    }`,
  },
};
