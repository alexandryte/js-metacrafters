/* Submitted by: Jewel Anne Panela
   FEU Tech  - 4th Year BSCSSE    */
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(id,name,desc){
	const newNFT = {
		id: id,
		name: name,
		description: desc	
	};
    myNFTs.push(newNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(){
    console.log("NFT LIST");
	for (i = 0; i < myNFTs.length; i++){
		console.log("\nID: " + myNFTs[i].id);
        console.log("NAME: " + myNFTs[i].name);
        console.log("DESCRIPTION: " + myNFTs[i].description);
	}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply(){
	var total = myNFTs.length
	console.log("Total supply: " + total);
}

// call your functions below this line
mintNFT(1, "Monkey", "Blue sky");
mintNFT(2, "Banana", "Yellow boat");
mintNFT(3, "Garden Dine", "Dinner place full of flowers.");
listNFTs();
console.log("\n");
getTotalSupply();











