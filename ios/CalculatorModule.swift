//
//  CalculatorModule.swift
//  calculator
//
//  Created by jake on 5/4/24.
//

import Foundation

@objc(CalculatorModule)
class CalculatorModule:NSObject {
   
  public func executeCalc(_ action:String, numberA:Int, numberB:Int, resolver: RCTPromiseResolveBlock, rejector:RCTPromiseRejectBlock) -> Void {
    
    if (action == "plus") {
      resolver(numberA + numberB);
      return;
    }
    
    if (action == "minus") {
      resolver(numberA - numberB);
      return;
    }
    
    if (action == "multiply") {
      resolver(numberA * numberB);
      return;
    }
    
    if (action == "divide") {
      resolver(numberA / numberB);
      return;
    }

    rejector("Unexpected Action Type", action, nil);
  }
  
}
