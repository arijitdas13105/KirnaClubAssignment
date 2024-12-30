import React, { useState } from "react";
import {
  BlockStack,
  Button,
  Card,
  InlineGrid,
  Text,
  InlineStack,
  Box,
} from "@shopify/polaris";
import { EditIcon, StarFilledIcon, StarIcon } from "@shopify/polaris-icons";

function ContestCard({ contest,isFavorite, onToggleFavorite  }) {
  return (
    <div>
      <Card roundedAbove="sm">
        <BlockStack gap="200">
          <InlineStack gap="200">
            <Text variant="headingMd" as="h6">
              Contest Name
            </Text>
            <Text as="p" variant="bodyMd ">
              {contest.name}
            </Text>
          </InlineStack>
          <BlockStack gap="200">
            <InlineGrid columns="1fr auto">
             
              <InlineStack gap="200">
                <Text as="h2" variant="headingSm">
                  Type
                </Text>

                <div
                  style={{
                    backgroundColor: "black",
                    color: "white",

                    borderRadius: "4px",
                  }}
                  className=" px-2"
                >
                  <Text as="span" variant="bodyLg">
                    {contest.type}
                  </Text>
                </div>
              </InlineStack>
              <Button
                icon={isFavorite ? StarFilledIcon : StarIcon}
                variant="tertiary"
                onClick={() => onToggleFavorite(contest)}
                accessibilityLabel="Toggle Favorite"
              />
            </InlineGrid>
          </BlockStack>
          <InlineStack gap="200">
            <Text variant="headingMd" as="h6">
              Phase
            </Text>
            <Text as="p" variant="bodyMd">
              {contest.phase}
            </Text>
          </InlineStack>
          <InlineStack gap="200">
            <Text variant="headingMd" as="h6">
              Duration
            </Text>
            <Text as="p" variant="bodyMd">
              {contest.durationSeconds}
            </Text>
          </InlineStack>
        </BlockStack>
      </Card>
    </div>
  );
}

export default ContestCard;
