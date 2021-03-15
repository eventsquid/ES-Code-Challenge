/*
    This function will grab a list of pending transactions and update 
    only the ones that were processed through authnet.

    It should return either "complete" if nothing was processed, or a count of how many were updated
    in the format "Processed x Records"
*/
module.exports = async ( affiliateID, validationKey, vert ) => {
	
	const
		getPending = require("./getPending"),
		{ updateTransaction } = require("../auth-net");
		
	// we need this secret key included to run
	if ( validationKey && validationKey === process.env.validationKey ) {
		
		let 
			transRA = await getPending( affiliateID, vert ),
			i = 0, 
			dataObj = {};
			
		// loop the transactions
		for ( i=0; i<transRA.length; i++ ) {
			
            dataObj.affiliateID = Number( transRA[i].a )
            dataObj.transactionID = String( transRA[i].pi )
            dataObj.vert = String( vert )
			
			// if this is an authnet transaction
			if ( transRA[i].py.toLowerCase() === "authnet" ) {
				
				// update the transaction
				await updateTransaction( dataObj );
				
			}
		}
		
		return { status: `Processed ${ transRA.length } Records` };
		
	} else {
		
		return { status: "completed" };
	}

}
