You can think of the controller as a buffer. 
Acting as the hub that connects the model and view
but also letting them move more independently than if they were wired directly together.
That way you can change how your app looks 
without having to touch your underlying model data and vice versa.

Notice that the only places where the model is mutated is in the controller.
