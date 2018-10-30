//CharacterMovementModel
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharacterMovementModel : MonoBehaviour
{
	//Public Variables
	public float Speed;
	
	//Private Variables
	private Vector3 m_MovementDirection;

	// Use this for initialization
	void Start()
	{
		;
	}
	
	// Update is called once per frame
	void Update()
	{
		UpdateMovement();
	}

	public void SetDirection(Vector2 direction)
	{
		m_MovementDirection = new Vector3(direction.x, direction.y, 0);
	}

	void UpdateMovement()
	{
		if(m_MovementDirection == Vector3.zero)
		{
			return;
		}

		m_MovementDirection.Normalize();

		transform.position += m_MovementDirection * Speed * Time.deltaTime; //Frame independent movement
	}

	public Vector3 GetDirection()
	{
		return m_MovementDirection;
	}

	public bool IsMoving()
	{
		return m_MovementDirection != Vector3.zero;
	}
}