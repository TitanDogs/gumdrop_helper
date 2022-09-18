# Gumdrop helper
Javascript tool to format a list of wallet addresses into Metaplex's distribution list format.

1/ Create a .env file and fill in the following variables:  
TOKEN_AMOUNT=<NUMBER>  

2/ run `yarn` in the root directory.

3/ Fill the holderList.json in the json folder with the required wallet addresses. Format should be an array of strings.

3/ run `node index.js` to start the script.

4/ The script will create a gumdropList.json file in a .cache folder where you would find the addresses with the correct format for Metaplex's gumdrop.

# Features:  
- Json format

# Related video tutorials:  
N/A
