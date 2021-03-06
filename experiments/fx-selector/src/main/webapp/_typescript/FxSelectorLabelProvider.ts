///<reference path="IconFont.ts" />
/**
 * ...
 * @author
 */
class FxSelectorLabelProvider implements ILabelProvider {

	constructor() {}

	addListener(listener : ILabelProviderListener) : void {
		
	}
	//The DecoratingLabelProvider implementation of this IBaseLabelProvider method adds the listener to both the nested label provider and the label decorator.
	dispose() : void {
		
	}
	//The DecoratingLabelProvider implementation of this IBaseLabelProvider method disposes both the nested label provider and the label decorator.
	/*Color*/
	getBackground(element:any,i:number) : string {
		return null;
	}
	//Provides a background color for the given element.
	getStyle(element:any,i:number) : string{
		return null;
	}
	/*Font*/
	getFont(element:any,i:number) : string {
		return IconMoonFont.fontFamily;
	}
	//Provides a font for the given element.
	/*Color*/
	getForeground(element:any,i:number) : string {
		return null;
	}
	//Provides a foreground color for the given element.
	/*Image*/
	getImage(element:any,i:number) : string {
		return null;
	}
	//The DecoratingLabelProvider implementation of this ILabelProvider method returns the image provided by the nested label provider's getImage method, decorated with the decoration provided by the label decorator's decorateImage method.
	getLabelDecorator() : ILabelDecorator {
		return null;
	}
	//Returns the label decorator, or null if none has been set.
	getLabelProvider() : ILabelProvider {
		return null;
	}
	//Returns the nested label provider.
	getText(element:any,i:number) : string {
		return IconMoonFont.getCode(element.icon);
	}
	//The DecoratingLabelProvider implementation of this ILabelProvider method returns the text label provided by the nested label provider's getText method, decorated with the decoration provided by the label decorator's decorateText method.
	isLabelProperty(element, property : string) : boolean {
		return true;
	}
	//The DecoratingLabelProvider implementation of this IBaseLabelProvider method returns true if the corresponding method on the nested label provider returns true or if the corresponding method on the decorator returns true.
	removeListener(listener : ILabelProviderListener) : void {
		
	}
	//The DecoratingLabelProvider implementation of this IBaseLabelProvider method removes the listener from both the nested label provider and the label decorator.
	setLabelDecorator(decorator : ILabelDecorator) : void {
		
	}
	//Sets the label decorator.
}
