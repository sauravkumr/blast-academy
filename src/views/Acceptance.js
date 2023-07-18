import React from 'react';
import classNames from 'classnames';
import Confetti from 'react-confetti';
import GenericSection from '../components/sections/GenericSection';
import Button from '../components/elements/Button';

class AcceptancePage extends React.Component {
  state = {
    showConfetti: false,
  };

  componentDidMount() {
    this.setState({ showConfetti: true });
  }

  capitalizeWords(inputString) {
    if (!inputString) {
      return "";
    }
  
    const words = inputString.split(" ");
    const ret = words.map(word => {
      const lowercase = word.toLowerCase();
      const firstLetter = lowercase.charAt(0).toUpperCase();
      return `${firstLetter}${lowercase.slice(1)}`;
    });
  
    return ret.join(" ");
  }

  decryptAndCapitalize(encryptedName) {
    console.log(encryptedName);
    // encryptedName = encryptedName.userId;
    if (!encryptedName || !this.checkValid(encryptedName)) {
      // Route home
      this.props.history.push('/');
      console.log('pushed');
    }

    const decryptionKey = 11;
    const modSpace = 26;

    const decryptedName = encryptedName
      .split('')
      .map((char) => {
        return this.decryptId(char, decryptionKey, modSpace);
      })
      .join('');

    // Capitalize the first character
    var res = decryptedName.charAt(0).toUpperCase() + decryptedName.slice(1);
    res = res.substring(1, res.length - 1);
    console.log(res);
    res = this.capitalizeWords(res);
    return res;
  }

  checkValid(inputString) {
    /** checkValid(inputString)
     * Checks if the first character in the input is Z and if the last input is A
     */
    if (!inputString) {
      return false;
    }
    if (inputString.charAt(0) == 'Z' && inputString.charAt(inputString.length - 1) == 'A') {
      return true;
    }
    return false;
  }

  decryptId(inputChar, key, modSpace) {
    /** decryptId(inputChar, key, modSpace)
     * Subtracts the key (default 11) and takes mod 26 of it
     */
    if (inputChar == "-") {
      return ' '
    }

    const charCode = inputChar.charCodeAt(0) - 65; // Should range from 0 to 25 if correct
    const res = (charCode - key + modSpace) % modSpace;
    return String.fromCharCode(res + 'A'.charCodeAt(0));
  }
  
  render() {
    const { userId } =  this.props.match.params;

    
    // Converting userId into the actual name
    // Input: all upercase letters, rotated 11
    // Output: rotate backwards 11
    

    const { showConfetti } = this.state;
    var { fullName } = "";
    fullName = this.decryptAndCapitalize(userId);
//     return (
//       <div className="container mt-20">
//         <section className="flex justify-center items-center h-screen mt-20">
          // <div className="bg-white border border-gray-400 p-16 pt-64 pl-128 pr-128 mx-auto max-w-3xl text-center">
          //   {showConfetti && (
          //     <Confetti
          //       recycle={false}
          //       numberOfPieces={800}
          //       width={window.innerWidth}
          //       height={window.innerHeight}
          //     />
          //   )}
          //   <div className="pt-50">
          //     <h2 className="px-20 pb-32 pt-32">Congratulations {fullName}!</h2>
          //   </div>
          //   <p className="px-20">
          //     We are honored to offer you admission to the BLAST AI Summer 2023 Cohort!
          //     <br />
          //     <br />
          //     Your application left our admissions staff inspired by your exceptional maturity, intellect, and passion. Among numerous applicants across 15 countries, your distinct history of academic and personal accomplishment stood out as unique. We are absolutely convinced that you possess the intellectual vitality required to conduct research of the highest caliber, and we are excited to see how you will contribute to the Summer 2023 Cohort. You are an exceptional match for BLAST, and we sincerely hope you will join us this summer!
          //     <br />
          //     <br />
          //     On this page you can find: (1) a copy of a program overview, which outlines the schedule for the bootcamp as well as the cost of attendance; and (2) a Terms of Service agreement.
          //     <br />
          //     <br />
          //     BLAST is dedicated to expanding access to AI research, which is why we price the program far less than comparable programs. If you indicated financial need on your application, you should have received a link to the scholarship form within the last week. We will finalize scholarship packages and get back to you by early May, but you may fill out the commit form in the meantime.
          //     <br />
          //     <br />
          //     Next Steps:
          //     <br />
          //     <ol className="list-decimal pl-6 mb-4">
          //     <li>
          //       Please fill out{' '}
          //       <a
          //         href="https://wnewxg7rxr5.typeform.com/to/It50iMMJ"
          //         target="_blank"
          //         className="text-blue-500 hover:underline"
          //       >
          //         this form
          //       </a>{' '}
          //       with your decision to commit before 5/4/2023.
          //     </li>

          //       <li>
          //         Read through the documents on this page completely.
          //       </li>
          //     </ol>
          //     <br />
          //     You may pay your tuition fees in the form above. If you would prefer an invoice, payment by check, or any other payment options, please respond to this email.
          //     <br />
          //     <br />
          //     Once again, congratulations! We are excited to have the opportunity to guide you through your journey of learning and exploration this summer!
          //   </p>
          // </div>
//         </section>

        // <GenericSection className="center-content">
        //   <div className="container">
        //     <div className="flex justify-center">
        //       <Button
        //         color="primary" 
        //         target="_blank" 
        //         href="https://blastai.org/BLAST AI Program Overview Summer 2023.pdf" 
        //         wideMobile
        //         type="button"
        //         onClick={(e) => {
        //           e.preventDefault();
        //           window.open('https://blastai.org/BLAST AI Program Overview Summer 2023.pdf', '_blank', 'noopener noreferrer');
        //         }}
        //         className="mr-32"
        //       >
        //         Program Overview
        //       </Button>
              
        //       <Button 
        //         color="primary" 
        //         target="_blank" 
        //         href="https://blastai.org/Blast AI Terms of Service Summer 2023.pdf" 
        //         wideMobile
        //         type="button"
        //         onClick={(e) => {
        //           e.preventDefault();
        //           window.open('https://blastai.org/Blast AI Terms of Service Summer 2023.pdf', '_blank', 'noopener noreferrer');
        //         }}
        //       >
        //         Terms of Service
        //       </Button>
        //     </div>
        //   </div>
        // </GenericSection>

//       </div>
//     );
//   }
// }

// export default AcceptancePage;

return (
  <div className="container mt-20 mx-auto px-4 md:px-0">
    <section className="flex justify-center items-center min-h-screen mt-20">
      <div className="bg-white border border-gray-400 p-8 md:p-16 pt-64 md:pt-64 md:pl-32 md:pr-32 mx-auto max-w-3xl text-center">
        {showConfetti && (
          <Confetti
            recycle={false}
            numberOfPieces={800}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        )}
        <div className="pt-50">
          <h2 className="px-4 md:px-20 pb-32 pt-32">Congratulations {fullName}!</h2>
        </div>
        <p className="px-4 md:px-20 text-sm md:text-base">
        {/* <div className="bg-white border border-gray-400 p-16 pt-64 pl-128 pr-128 mx-auto max-w-3xl text-center">
            {showConfetti && (
              <Confetti
                recycle={false}
                numberOfPieces={800}
                width={window.innerWidth}
                height={window.innerHeight}
              />
            )}
            <div className="pt-50">
              <h2 className="px-20 pb-32 pt-32">Congratulations {fullName}!</h2>
            </div>
            <p className="px-20"> */}
              We are honored to offer you admission to the BLAST AI Summer 2023 Cohort!
              <br />
              <br />
              Your application left our admissions staff inspired by your exceptional maturity, intellect, and passion. Among numerous applicants across 16 countries, your distinct history of academic and personal accomplishment stood out as unique. We are absolutely convinced that you possess the intellectual vitality required to conduct research of the highest caliber, and we are excited to see how you will contribute to the Summer 2023 Cohort. You are an exceptional match for BLAST, and we sincerely hope you will join us this summer!
              <br />
              <br />
              On this page you can find: (1) a copy of a program overview, which outlines the schedule for the bootcamp as well as the cost of attendance; and (2) a Terms of Service agreement.
              <br />
              <br />
              Unfortunately, we are unable to offer financial scholarship at this time due to the proximity of the program's start. If this affects your ability to attend, please email us and we can provide you with some resources on independent AI research.
              <br />
              <br />
              Next Steps:
              <br />
              <ol className="list-decimal pl-6 mb-4">
              <li>
                Please fill out{' '}
                <a
                  href="https://wnewxg7rxr5.typeform.com/to/It50iMMJ"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  this form
                </a>{' '}
                with your decision to commit before 6/12/2023.
              </li>

                <li>
                  Read through the documents on this page completely.
                </li>
              </ol>
              <br />
              You may pay your tuition fees in the form above. If you would prefer an invoice, payment by check, or any other payment options, please reply to your status update email.
              <br />
              <br />
              Once again, congratulations! We are excited to have the opportunity to guide you through your journey of learning and exploration this summer!
        </p>
      </div>
    </section>

    <GenericSection className="center-content">
        <div className="container">
          <div className="flex justify-center">
            <Button
              color="primary" 
              target="_blank" 
              href="https://blastai.org/BLAST AI Program Overview Summer 2023.pdf" 
              wideMobile
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://blastai.org/BLAST AI Program Overview Summer 2023.pdf', '_blank', 'noopener noreferrer');
              }}
              className="mr-32"
            >
              Program Overview
            </Button>
            
            <Button 
              color="primary" 
              target="_blank" 
              href="https://blastai.org/Blast AI Terms of Service Summer 2023.pdf" 
              wideMobile
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://blastai.org/Blast AI Terms of Service Summer 2023.pdf', '_blank', 'noopener noreferrer');
              }}
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </GenericSection>

  </div>
);
}
}

export default AcceptancePage;