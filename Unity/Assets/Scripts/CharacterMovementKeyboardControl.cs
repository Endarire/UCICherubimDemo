//CharacterMovementKeyboardControl
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//ERROR for CharacterMovementBaseControl: "The type or namespace 'CharacterMovementBaseControl' could not be found.  (Are you missing a using directive or an assembly reference?)"
public class CharacterMovementKeyboardControl : CharacterMovementBaseControl
{

	// Use this for initialization
	void Start ()
	{
		
	}
	
	// Update is called once per frame
	void Update ()
	{
		UpdateDirection();
	}

	void UpdateDirection()
	{
		Vector2 newDirection = Vector2.zero; //Set direction to neutral upon movement stop.

		if(Input.GetKey(KeyCode.UpArrow) )
		{
			newDirection.y = 1;
		}

		if(Input.GetKey(KeyCode.DownArrow) )
		{
			newDirection.y = -1;
		}

		if(Input.GetKey(KeyCode.LeftArrow) )
		{
			newDirection.x = -1;
		}

		if(Input.GetKey(KeyCode.RightArrow) )
		{
			newDirection.x = 1;
		}

		SetDirection(newDirection);
	}
}