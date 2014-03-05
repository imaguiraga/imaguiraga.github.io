interface ILabelProviderListener {
	labelProviderChanged(/*LabelProviderChangedEvent*/	event);
}

interface ILabelDecorator {
	/*Image*/
	decorateImage(image, element) : string;
	//Returns an image that is based on the given image, but decorated with additional information relating to the state of the provided element.
	decorateText(text, element) : string;
}

interface ILabelProvider {
	//contructor(ILabelProvider provider, ILabelDecorator decorator)

	addListener(listener : ILabelProviderListener)
	//The DecoratingLabelProvider implementation of this IBaseLabelProvider method adds the listener to both the nested label provider and the label decorator.
	dispose();
	//The DecoratingLabelProvider implementation of this IBaseLabelProvider method disposes both the nested label provider and the label decorator.
	/*Color*/
	getBackground(element) : string;
	//Provides a background color for the given element.

	/*Font*/
	getFont(element) : string;
	//Provides a font for the given element.
	/*Color*/
	getForeground(element) : string;
	//Provides a foreground color for the given element.
	/*Image*/
	getImage(element) : string;
	//The DecoratingLabelProvider implementation of this ILabelProvider method returns the image provided by the nested label provider's getImage method, decorated with the decoration provided by the label decorator's decorateImage method.
	getLabelDecorator() : ILabelDecorator;
	//Returns the label decorator, or null if none has been set.
	getLabelProvider() : ILabelProvider;
	//Returns the nested label provider.
	getText(element) : string;
	//The DecoratingLabelProvider implementation of this ILabelProvider method returns the text label provided by the nested label provider's getText method, decorated with the decoration provided by the label decorator's decorateText method.
	isLabelProperty(element, property : string) : boolean;
	//The DecoratingLabelProvider implementation of this IBaseLabelProvider method returns true if the corresponding method on the nested label provider returns true or if the corresponding method on the decorator returns true.
	removeListener(listener:ILabelProviderListener);
	//The DecoratingLabelProvider implementation of this IBaseLabelProvider method removes the listener from both the nested label provider and the label decorator.
	setLabelDecorator(decorator:ILabelDecorator);
	//Sets the label decorator.

}
